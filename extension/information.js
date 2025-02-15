import { nodecg } from './util/nodecg.js';
import { setupInformationArrayReplicant } from './util/replicants.js';
import { v4 as uuid } from 'uuid';
const createInformation = (text) => {
    if (!setupInformationArrayReplicant.value) {
        return;
    }
    setupInformationArrayReplicant.value.push({
        id: uuid(),
        text,
    });
    nodecg.log.info('Add information');
};
const updateInformation = (information) => {
    if (!setupInformationArrayReplicant.value) {
        return;
    }
    const informationIndex = setupInformationArrayReplicant.value.findIndex((informationRep) => informationRep.id === information.id);
    if (informationIndex < -1) {
        return;
    }
    setupInformationArrayReplicant.value[informationIndex] = information;
    nodecg.log.info('Update information');
};
const deleteInformation = (id) => {
    if (!setupInformationArrayReplicant.value) {
        return;
    }
    setupInformationArrayReplicant.value = setupInformationArrayReplicant.value.filter((information) => information.id !== id);
    nodecg.log.info('Delete information');
};
nodecg.listenFor('createInformation', (data, ack) => {
    createInformation(data.text);
    if (ack && !ack.handled) {
        ack(null);
    }
});
nodecg.listenFor('updateInformation', (data, ack) => {
    updateInformation(data);
    if (ack && !ack.handled) {
        ack(null);
    }
});
nodecg.listenFor('deleteInformation', (data, ack) => {
    deleteInformation(data.id);
    if (ack && !ack.handled) {
        ack(null);
    }
});
