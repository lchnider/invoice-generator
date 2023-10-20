<template>
  <div class="invoice-footer text-center">
    <div>{{ senderAddress.name }}</div>
    <div class="text-capitalize">
      {{ $t('company') }} #: {{ senderAddress.companyNumber }}
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useInvoiceStore } from 'src/stores/invoice';
const { senderAddress } = storeToRefs(useInvoiceStore());
</script>
