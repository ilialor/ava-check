import { dev } from '$app/environment';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as doctoken } from './service.did.js';

// ID вашего канистера
const doctoken_id = 'h5x3q-hyaaa-aaaal-adg6q-cai';

// Создайте HttpAgent для главной сети
const agent = new HttpAgent({ host: 'https://ic0.app' });

// Создайте актора для вашего канистера
const doctoken_canister = Actor.createActor(doctoken, { agent, canisterId: doctoken_id });

// Вызовите метод канистера
doctoken_canister.getDocumentById(38).then(response => {
  console.log(response);
});


// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// const actor = doctoken;
// const res = actor.getDocumentById(38);
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
