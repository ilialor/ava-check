import { writable } from 'svelte/store';
import { AuthClient } from '@dfinity/auth-client';

export const principalId = writable('');
export const isAuthenticated = writable(false);

async function initializeAuthClient() {
  const authClient = await AuthClient.create();

  if (await authClient.isAuthenticated()) {
    isAuthenticated.set(true);
    const identity = authClient.getIdentity();
    principalId.set(identity.getPrincipal().toText());
  }
}

export async function loginII() {
  const authClient = await AuthClient.create();
  const iiUrl = 'https://identity.ic0.app'; // URL of the Internet Identity provider

  await authClient.login({
    identityProvider: iiUrl,
    onSuccess: () => {
      isAuthenticated.set(true);
      const identity = authClient.getIdentity();
      principalId.set(identity.getPrincipal().toText());
    },
    onError: () => {
      isAuthenticated.set(false);
    }
  });
}

export function logout() {
  localStorage.removeItem('ic-delegation');
  localStorage.removeItem('ic-identity');
  isAuthenticated.set(false);
  principalId.set('');
}

initializeAuthClient();
