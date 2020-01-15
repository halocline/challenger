import { base } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

export const challenger = deepMerge(base, {
  global: {
    colors: {
      background: { dark: '#0F0F0F', light: '#F0F0F0' },
      'background-back': { dark: '#0F0F0F', light: '#F0F0F0' },
      'background-front': { dark: '#1F1F1F', light: '#FFFFFF' },
      'background-contrast': { dark: '#FFFFFF18', light: '#00000018' },
    },
  },
});
