import { dev } from '$app/environment';
import { Actor, HttpAgent } from '@dfinity/agent';
import { AuthClient } from '@dfinity/auth-client';
import { idlFactory as doctoken } from './service.did.js';

const doctoken_id = 'h5x3q-hyaaa-aaaal-adg6q-cai';
const tokenId = 38;

const agent = new HttpAgent({ host: 'https://ic0.app' });

/**
 * @typedef {'string' | CryptoKeyPair} StoredKey
 */

const noStorageImpl = {
    /**
     * @param {string} key
     * @returns {Promise<StoredKey|null>}
     */
    get(key) {
        return Promise.resolve(null);
    },
    /**
     * @param {string} key
     * @param {StoredKey} value
     * @returns {Promise<void>}
     */
    set(key, value) {
        return Promise.resolve();
    },
    /**
     * @param {string} key
     * @returns {Promise<void>}
     */
    remove(key) {
        return Promise.resolve();
    },
};

const doctoken_canister = Actor.createActor(doctoken, { agent, canisterId: doctoken_id });

doctoken_canister.getDocumentById(tokenId).then(response => {
    console.log("Doctoken: ", response);
});

// Инициализация AuthClient
if (typeof window !== "undefined") {
    // Этот код будет выполнен только на клиентской стороне
    initializeAuthClient().then(authClient => {
        // Здесь можно выполнить действия с authClient, например, проверить аутентификацию
    });
}

async function initializeAuthClient() {
    return await AuthClient.create({
        storage: noStorageImpl,
    });
}

// Поддержка HMR и предварительная отрисовка
export const csr = dev;
export const prerender = true;
