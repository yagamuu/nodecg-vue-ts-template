import { computed } from 'vue';
import { layoutBg } from '../browser_shared/replicants';

export function useAssets() {
  const layoutBgUrl = computed(() => layoutBg?.value[0]?.url ?? '');

  return {
    layoutBg,
    layoutBgUrl
  }
}