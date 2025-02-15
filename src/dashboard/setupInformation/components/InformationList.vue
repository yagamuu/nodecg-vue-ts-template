<script setup lang="ts">
import { setupInformationArray } from '../../../browser_shared/replicants';
import type { Schemas } from '../../../types';

 
defineEmits<{
  (e: 'openModificationForm', value: Schemas.SetupInformation.SetupInformation): void
}>();
const deleteInformation = (id: string) => {
  nodecg.sendMessage('deleteInformation', { id });
};
</script>

<template>
  <div>
    <QCard
      v-for="(setupInformation) in setupInformationArray?.data"
      :key="setupInformation?.id"
      class="my-card q-mt-md">
      <QCardSection>
        {{ setupInformation.text }}
      </QCardSection>
      <QCardActions align="right">
        <QBtn color="primary" size="md" label="Edit"
          @click="$emit('openModificationForm', setupInformation)"/>
        <QBtn color="negative" size="xs" label="Delete"
          @click="deleteInformation(setupInformation.id)"/>
        </QCardActions>
    </QCard>
  </div>
</template>
