import { StartSoon } from '../types/schemas/startSoon';
import { useReplicant } from 'nodecg-vue-composable';

export function useStartSoon() {
  const startSoon = useReplicant<StartSoon>('startSoon', 'nodecg-vue-ts-template');

  return {
    startSoon
  }
}