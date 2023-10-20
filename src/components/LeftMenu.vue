<template>
  <div class="row justify-between items-center absolute-top no_print">
    <q-btn @click="print" icon="print" dense flat />
    <q-toggle
      :icon="!darkmode ? 'light_mode' : 'dark_mode'"
      v-model="darkmode"
      dense
      color="grey"
      flat
    />
    <LangSwitcher />
  </div>
</template>

<script lang="ts" setup>
import LangSwitcher from 'src/components/LangSwitcher.vue';
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { useSettingsStore } from 'src/stores/settings';
import { computed } from 'vue';
const { dark } = storeToRefs(useSettingsStore());
const $q = useQuasar();

const darkmode = computed({
  get() {
    return dark.value;
  },
  set(val) {
    $q.dark.set(val);
    dark.value = val;
  },
});

const print = () => {
  window.print();
};
</script>
