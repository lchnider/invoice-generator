<template>
  <div class="invoice-header row justify-between text-capitalize">
    <div>
      {{ senderAddress.name }} - {{ $t('invoice') }} {{ invoice_date }}-{{ id }}
    </div>
    <div>Page 1 / 1</div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useInvoiceStore } from 'src/stores/invoice';
const { id, invoice_date, senderAddress } = storeToRefs(useInvoiceStore());
</script>
