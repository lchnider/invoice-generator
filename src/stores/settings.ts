import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: (): { dark: boolean; lang: string } => ({
    dark: false,
    lang: 'en-US',
  }),
  persist: true,
  actions: {},
});
