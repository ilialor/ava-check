import { dev } from '$app/environment';
import { Actor, HttpAgent } from '@dfinity/agent';

import { idlFactory as doctoken } from './service.did.js';


const doctoken_id = 'h5x3q-hyaaa-aaaal-adg6q-cai';
const tokenId = 38;

const agent = new HttpAgent({ host: 'https://ic0.app' });

const doctoken_canister = Actor.createActor(doctoken, { agent, canisterId: doctoken_id });

doctoken_canister.getDocumentById(tokenId).then(response => {
  console.log("Doctoken: ", response);
});


// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
