import { boot } from 'quasar/wrappers';
import { useSettingsStore } from 'src/stores/settings';
import { Dark } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ store }) => {
  const settings = useSettingsStore(store);
  if (settings.dark) Dark.set(true);
});
