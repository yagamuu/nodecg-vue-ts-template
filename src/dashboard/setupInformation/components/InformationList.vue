<script setup lang="ts">
import { useSetupInformation } from '@nodecg-vue-ts-template/composable';
import { SetupInformation } from '@nodecg-vue-ts-template/types/schemas/setupInformation';

// eslint-disable-next-line no-spaced-func
defineEmits<{
  (e: 'openModificationForm', value: SetupInformation): void
}>();

const { setupInformationArray } = useSetupInformation();

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
