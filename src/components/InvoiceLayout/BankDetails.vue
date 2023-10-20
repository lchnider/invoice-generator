<template>
  <div class="bankDetails q-pa-sm cursor-pointer relative-position editable">
    <div>
      <strong class="text-uppercase">{{ $t('iban') }}</strong> :
      {{ bankDetails.IBAN }}
    </div>
    <div>
      <strong class="text-uppercase">{{ $t('swift') }}</strong> :
      {{ bankDetails.SWIFT }}
    </div>
    <div>
      <strong>{{ $t('address') }}</strong> :
      {{ bankDetails.address.name }}
      {{ bankDetails.address.streetAddress }}
      {{ bankDetails.address.city }}, {{ bankDetails.address.postalCode }}
      {{ bankDetails.address.country }}
    </div>
    <q-popup-proxy class="q-pa-sm">
      <q-form class="q-gutter-sm">
        <q-input
          outlined
          type="text"
          v-for="idx in bankDetailKeys"
          :key="idx"
          dense
          :label="idx"
          v-model="bankDetailsInfo[idx]"
        />
        <q-input
          outlined
          type="text"
          v-for="addressIdx in Object.keys(bankDetailsInfo.address)"
          :key="'address.' + addressIdx"
          dense
          :label="addressIdx"
          v-model="bankDetailsInfo.address[addressIdx]"
        />
      </q-form>
    </q-popup-proxy>
  </div>
</template>

<script>
export default {
  props: {
    bankDetails: Object,
  },
  computed: {
    bankDetailsInfo() {
      return this.bankDetails;
    },
    bankDetailKeys() {
      return Object.keys(this.bankDetailsInfo).filter(
        (key) => typeof this.bankDetailsInfo[key] !== 'object'
      );
    },
  },
};
</script>
