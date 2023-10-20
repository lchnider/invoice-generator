<template>
  <q-page class="invoice">
    <LeftMenu />

    <div
      class="invoice-container column justify-between"
      style="height: 100svh"
    >
      <div class="col-auto">
        <InvoiceHeader />
        <q-separator spaced />
      </div>
      <div class="col">
        <InvoiceBody />
      </div>
      <div class="col-auto">
        <q-separator spaced />
        <InvoiceFooter />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import LeftMenu from 'src/components/LeftMenu.vue';
import InvoiceHeader from 'src/components/InvoiceHeader.vue';
import InvoiceBody from 'src/components/InvoiceBody.vue';
import InvoiceFooter from 'src/components/InvoiceFooter.vue';
</script>
