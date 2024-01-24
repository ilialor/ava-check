import { browser, dev } from '$app/environment';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as doctoken } from './service.did.js';

const doctoken_id = 'h5x3q-hyaaa-aaaal-adg6q-cai';

const agent = new HttpAgent({ host: 'https://ic0.app' });
const doctoken_canister = Actor.createActor(doctoken, { agent, canisterId: doctoken_id });

export const _doctoken_canister = doctoken_canister;
// Поддержка HMR и предварительная отрисовка
export const csr = dev;
export const prerender = true;
