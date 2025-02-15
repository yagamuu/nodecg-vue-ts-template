import { set } from './util/nodecg.js';
export default async (nodecg) => {
    /**
     * Because of how top-level `import`s work, it helps to use `import`s here
     * to force things to be loaded *after* the NodeCG context is set.
     */
    set(nodecg); // set nodecg "context" before anything else
    await import('./util/replicants.js'); // make sure replicants are set up
    // await import('./example.js');
    await import('./displaySound.js');
    await import('./information.js');
    await import('./startSoon.js');
};
