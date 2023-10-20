<template>
  <div class="cursor-pointer relative-position editable">
    <div>{{ address.name }}</div>
    <div>{{ address.streetAddress }}</div>
    <div>{{ address.city }}, {{ address.postalCode }}</div>
    <div>{{ address.country }}</div>
    <div v-if="company && address.companyNumber">
      {{ $t('company') }} #: {{ address.companyNumber }}
    </div>
    <q-popup-proxy class="q-pa-sm">
      <q-form class="q-gutter-xs">
        <q-input
          outlined
          type="text"
          v-for="idx in Object.keys(addressInfo)"
          :key="idx"
          dense
          :label="idx"
          v-model="addressInfo[idx]"
        />
      </q-form>
    </q-popup-proxy>
  </div>
</template>

<script>
export default {
  props: {
    address: Object,
    company: Boolean || false,
  },
  computed: {
    addressInfo() {
      return this.address;
    },
  },
};
</script>
