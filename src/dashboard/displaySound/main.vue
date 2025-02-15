<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { ref, watchEffect } from 'vue';
import { displaySound } from '../../browser_shared/replicants';
import { useRunData } from '../../composable';

useHead({ title: 'Display Sound' }); // set the title of this page

const { players } = useRunData();
const selected = ref(displaySound?.data?.playerId || 'null');
watchEffect(() => {
  selected.value = displaySound?.data?.playerId || '';
});
const changeDisplaySound = () => {
  if (!displaySound) return;
  displaySound.data = {
    playerId: selected.value,
  };
  displaySound.save();
};
</script>

<template>
  <div class="q-pa-md">
    <QRadio
      v-for="(player) in players"
      :label="player.name"
      :key="player.id"
      :val="player.id"
      v-model="selected"
      @update:model-value="changeDisplaySound" />
  </div>
</template>
