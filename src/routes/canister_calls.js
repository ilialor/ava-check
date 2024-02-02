import { Principal } from '@dfinity/principal';
import { _rep_canister_actor } from './check/+page.js';
import { _doctokenCanister, _hubCanister } from './cert/+page.js';

/**
 * Get User Balance from reputation canister
 * @param {string} principalText 
 * @returns {Promise<any>} 
 */
export async function getBalance(principalText) {
    const principal = Principal.fromText(principalText);
    const response = await _rep_canister_actor.getUserBalance(principal);
    console.log("User balance: ", { response });
    return response;
}

/**
 * Get User Soulbound Badge from reputation canister
 * @param {string} principalText 
 * @returns {Promise<any>} 
 */
export async function getSoulboundBadge(principalText) {
    const principal = Principal.fromText(principalText);
    const response = await _rep_canister_actor.getSoulboundBadge(principal);
    return response;
}

/**
 * Get document by tokenId from doctoken canister
 * @param {string} principalText
 * @returns {Promise<any>}
 */
export async function getCert(principalText) {
    const principal = Principal.fromText(principalText);
    const response = await _doctokenCanister.userCertificates(principal);
    return response;
}

/**
* Get [(CanisterId, DocId)] from hub canister
* @param {string} principalText
* @returns {Promise<any>}
*/
export async function getUserDocuments(principalText) {
    const principal = Principal.fromText(principalText);
    const response = await _hubCanister.getUserDocuments(principal);
    return response;
}

// /**
// * Get [(CanisterId, DocId)] from hub canister
// * @param {string} principalText
// * @returns {Promise<any>}
// */
// export async function fetchUserDocuments(principalText) {
//     const principal = Principal.fromText(principalText);

//     try {
//         const response = await _hubCanister.getUserDocuments(principal);
//         return response;
//     } catch (error) {
//         console.error('Error fetching user documents:', error);
//         return [];
//     }
// }


