import { dev } from '$app/environment';
import { Actor, HttpAgent } from '@dfinity/agent';
// import { Principal } from '@dfinity/principal';
import { idlFactory as rep } from './service_rep.did.js';

const rep_canister = "aoxye-tiaaa-aaaal-adgnq-cai";

const agent = new HttpAgent({ host: 'https://ic0.app' });

const rep_canister_actor = Actor.createActor(rep, { agent, canisterId: rep_canister });
rep_canister_actor.getUserBalance("oa7ab-4elxo-r5ooc-a23ga-lheml-we4wg-z5iuo-ery2n-57uyv-u234p-pae").then(response => {
  console.log("Reputation balance: ", response);
});

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// const actor = doctoken;
// const res = actor.getDocumentById(38);
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
