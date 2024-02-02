import { dev } from '$app/environment';
import { Principal } from '@dfinity/principal';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as doctokenIdlFactory } from './service.did.js';
import { idlFactory as hubIdlFactory } from './hub.did.js';

const defaultDoctokenId = 'h5x3q-hyaaa-aaaal-adg6q-cai';
const hubId = "a3qjj-saaaa-aaaal-adgoa-cai";

const agent = new HttpAgent({ host: 'https://ic0.app' });
const hubCanister = Actor.createActor(hubIdlFactory, { agent, canisterId: hubId });
const doctokenCanister = Actor.createActor(doctokenIdlFactory, { agent, canisterId: defaultDoctokenId });

/**
* Get [(CanisterId, DocId)] from hub canister
* @param {string} principalText
* @returns {Promise<any>}
*/
async function fetchUserDocuments(principalText) {
    const principal = Principal.fromText(principalText);

    try {
        const response = await hubCanister.getUserDocuments(principal);
        console.log("User documents: ", { response });
        return response;
    } catch (error) {
        console.error('Error fetching user documents:', error);
        return [];
    }
}

/**
 * Fetch documents from doctoken canisters for each pair [(CanisterId, DocId)] using getCert with principalText
 * @param {Array<[string, string]>} documentPairs - An array of tuples containing CanisterId and DocId
 * @param {string} principalText - The principal text to pass to getCert
 * @returns {Promise<Array<any>>} A promise that resolves to an array of documents
 */
async function fetchDocumentsFromCanisters(documentPairs, principalText) {
    const documents = [];
    for (const [canisterId, docId] of documentPairs) {
        const doctokenCanister = Actor.createActor(doctokenIdlFactory, { agent, canisterId });

        try {
            const certificates = await doctokenCanister.userCertificates(principalText);
            console.log(`Certificates for principal ${principalText} from canister ${canisterId}:`, certificates);
            if (Array.isArray(certificates)) {
                documents.push(...certificates); // Spread the array of certificates into the documents array
            } else {
                console.error(`Certificates received from canister ${canisterId} are not an array:`, certificates);
                return [];
            }
        } catch (error) {
            console.error(`Error fetching document for principal ${principalText} from canister ${canisterId}:`, error);
            return [];
        }
    };
    return documents;
}

/**
 * Get array of documents from doctoken canisters using the principalText
 * @param {string} principalText
 * @returns {Promise<Array<any>>}
 */
export async function _getDocuments(principalText) {
    const documentPairs = await fetchUserDocuments(principalText);
    return fetchDocumentsFromCanisters(documentPairs, principalText);
}

export const _hubCanister = hubCanister;
export const _doctokenCanister = doctokenCanister;
// Support for HMR and pre-rendering
export const csr = dev;
export const prerender = true;
