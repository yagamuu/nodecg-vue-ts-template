<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { ref, computed } from 'vue';
import type { Schemas } from '../../types';
import InformationCreationForm from './components/InformationCreationForm.vue';
import InformationModificationForm from './components/InformationModificationForm.vue';
import InformationList from './components/InformationList.vue';

// Set the title of this page.
useHead({ title: 'Setup Information' });

const transitionStatus = ref('informations');
const modificationInformation = ref<Schemas.SetupInformation.SetupInformation | null>(null);
const isCreation = computed(() => transitionStatus.value === 'creation');
const isModification = computed(() => transitionStatus.value === 'modification');
const openCreationForm = () => {
  transitionStatus.value = 'creation';
};
const openModificationForm = (information: Schemas.SetupInformation.SetupInformation) => {
  modificationInformation.value = information;
  transitionStatus.value = 'modification';
};
const closeForm = () => {
  transitionStatus.value = 'information';
};
</script>

<template>
  <div class="q-pa-md">
    <QSlideTransition>
      <information-creation-form v-if="isCreation" @close-creation-form="closeForm"/>
      <information-modification-form
        v-else-if="isModification"
        :information="modificationInformation as Schemas.SetupInformation.SetupInformation"
        @close-creation-form="closeForm"/>
      <div v-else>
        <QBtn
          color="secondary"
          class="full-width"
          label="Add Information"
          @click="openCreationForm"/>
          <QScrollArea style="height: 480px;">
            <information-list @open-modification-form="openModificationForm"/>
          </QScrollArea>
      </div>
    </QSlideTransition>
  </div>
</template>
