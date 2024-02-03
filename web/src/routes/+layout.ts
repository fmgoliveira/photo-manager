import type { LayoutLoad } from './$types';

export const ssr = false;
export const csr = true;

export const load = (async () => {
  return {
    meta: {
      title: 'Pics',
    },
  };
}) satisfies LayoutLoad;
