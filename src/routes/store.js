import { writable } from 'svelte/store';

/**
 * @typedef {Object} Badge
 * @property {string} owner
 * @property {Object} reputation
 * @property {string} evolution
 */

/** 
 * @type {import('svelte/store').Writable<Badge|null>}
 */
export const badgeReceipt = writable(null);
