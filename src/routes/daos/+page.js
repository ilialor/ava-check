import { dev } from '$app/environment';
import { Actor, HttpAgent } from '@dfinity/agent';
// import { idlFactory as rep } from './service_rep.did.js';

const rep_canister = "aoxye-tiaaa-aaaal-adgnq-cai";

const agent = new HttpAgent({ host: 'https://ic0.app' });

// const rep_canister_actor = Actor.createActor(rep, { agent, canisterId: rep_canister });

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// export const _rep_canister_actor = rep_canister_actor;
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
