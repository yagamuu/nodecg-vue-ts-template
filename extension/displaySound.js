import { nodecg } from './util/nodecg.js';
import { runDataActiveRunReplicant, displaySoundReplicant } from './util/replicants.js';
if (runDataActiveRunReplicant.value?.teams) {
    displaySoundReplicant.value = {
        playerId: runDataActiveRunReplicant.value.teams[0].players[0].id,
    };
}
runDataActiveRunReplicant.on('change', (newVal, oldVal) => {
    if (newVal?.teams && oldVal?.id !== newVal.id) {
        displaySoundReplicant.value.playerId = newVal.teams[0].players[0].id;
    }
    nodecg.log.info('Change Display Sound');
});
const changeDisplaySound = (playerId) => {
    if (!displaySoundReplicant.value) {
        return;
    }
    displaySoundReplicant.value.playerId = playerId;
    nodecg.log.info('Change Display Sound');
};
nodecg.listenFor('changeDisplaySound', (data, ack) => {
    changeDisplaySound(data.id);
    if (ack && !ack.handled) {
        ack(null);
    }
});
