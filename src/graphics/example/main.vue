<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { ref } from 'vue';

const text = ref('Example');

// Set the title of this page.
useHead({ title: 'example' });
</script>

<template>
  <div>
    {{ text }}
    <br><br>
    <img src="./image.png">
  </div>
</template>
