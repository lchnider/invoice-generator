<template>
  <q-icon
    size="sm"
    class="cursor-pointer"
    :name="`svguse:icons.svg#${nextLocale.icon}`"
    @click="local = nextLocale.value"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSettingsStore } from 'src/stores/settings';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: 'global' });
const { lang } = storeToRefs(useSettingsStore());

const local = computed({
  get() {
    return lang.value;
  },
  set(val) {
    locale.value = val;
    lang.value = val;
  },
});

const nextLocale = computed(() => {
  const result = localeOptions.find((e) => e.value !== local.value);
  return result || localeOptions[0];
});

const localeOptions = [
  { value: 'fr', icon: 'fr' },
  { value: 'en-US', icon: 'uk' },
];
</script>
