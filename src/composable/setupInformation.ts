import { SetupInformationArray } from '../types/schemas/setupInformation';
import { useReplicant } from 'nodecg-vue-composable';

export function useSetupInformation() {
  const setupInformationArray = useReplicant<SetupInformationArray>('setupInformationArray', 'nodecg-vue-ts-template');

  return {
    setupInformationArray
  }
}