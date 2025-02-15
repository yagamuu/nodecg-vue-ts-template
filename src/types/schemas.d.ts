/**
 * This is a file where the schema types can be re-exported properly.
 * This is for convenience; nothing is different if referenced from their files directly.
 * Also see index.d.ts for a "grouped" re-export of this as well.
 */

export type { Configschema } from './schemas/configschema.d.ts';
export type { DisplaySound } from './schemas/displaySound.d.ts';
export type { StartSoon } from './schemas/startSoon.d.ts';
export type * as SetupInformation from './schemas/setupInformation.d.ts';
export type * as Speedcontrol from './schemas/speedcontrol/index.d.ts';
export type { ExampleReplicant } from './schemas/exampleReplicant.d.ts';
