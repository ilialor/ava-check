import { Principal } from '@dfinity/principal';
import { _rep_canister_actor } from './+page.js'; 


/**
 * Получить баланс пользователя
 * @param {string} principalText - текстовое представление principal пользователя
 * @returns {Promise<any>} - Промис, который возвращает баланс
 */
export async function getBalance(principalText) {
    const principal = Principal.fromText(principalText);
    const response = await _rep_canister_actor.getUserBalance(principal);
    console.log("User balance: ", {response});
    return response; 
}

