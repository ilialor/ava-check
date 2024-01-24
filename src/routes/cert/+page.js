import { browser, dev } from '$app/environment';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as doctoken } from './service.did.js';
import { badgeReceipt } from '../store.js';

const doctoken_id = 'h5x3q-hyaaa-aaaal-adg6q-cai';
const tokenId = 42;

const agent = new HttpAgent({ host: 'https://ic0.app' });
const doctoken_canister = Actor.createActor(doctoken, { agent, canisterId: doctoken_id });

// Инициализация и вызовы к действиям на canister должны происходить в браузере
// if (browser) {
//   doctoken_canister.getDocumentById(tokenId).then(response => {
//     if (response && typeof response === 'object' && !Array.isArray(response)) {
//       if ('owner' in response && 'reputation' in response && 'evolution' in response) {
//           badgeReceipt.set(response);
//       } else {
//           console.error('Неверный формат данных', response);
//       }
//   }});
// }


// Поддержка HMR и предварительная отрисовка
export const csr = dev;
export const prerender = true;
