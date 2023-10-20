<template>
  <div class="text-capitalize row justify-between">
    <AddressInfo :address="senderAddress" :company="true" />
    <div class="col-auto text-right self-end cursor-pointer">
      <div class="text-h6">
        <q-icon name="edit" class="no_print text-grey" /> {{ $t('invoice') }}
      </div>
      <div>{{ invoice_date }}-{{ id }}</div>
      <div>{{ senderAddress.city }}, {{ date }}</div>
      <q-popup-proxy>
        <q-form class="q-gutter-xs">
          <q-input
            outlined
            type="number"
            dense
            :label="$t('invoice_id')"
            v-model="id"
          />
          <q-input
            outlined
            type="text"
            dense
            :label="$t('currency')"
            v-model="currency"
          />
          <q-date
            outlined
            mask="DD/MM/YYYY"
            type="text"
            dense
            label="date"
            v-model="date"
            minimal
          />
        </q-form>
      </q-popup-proxy>
    </div>
  </div>

  <div class="row justify-end q-pt-lg">
    <AddressInfo :address="receiverAddress" class="receiver col-auto" />
  </div>

  <div class="q-pt-xl" style="width: 450px">
    <div v-html="description" class="editable" />
    <q-popup-edit
      v-model="description"
      auto-save
      v-slot="scope"
      style="width: 450px"
    >
      <q-editor v-model="scope.value" min-height="5rem" flat />
    </q-popup-edit>
  </div>

  <InvoiceTable
    :items="items"
    @deleteItem="deleteItem($event)"
    :currency="currency"
  />
  <q-btn icon="add" class="no_print" @click="addNewItem()" flat />

  <div class="row justify-between items-end q-pt-md text-capitalize">
    <BankDetails :bankDetails="bankDetails" />
    <div>
      <InvoiceTotal :subtotal="subtotal" :total="total" :currency="currency" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import InvoiceTable from 'src/components/InvoiceLayout/InvoiceTable.vue';
import BankDetails from 'src/components/InvoiceLayout/BankDetails.vue';
import InvoiceTotal from 'src/components/InvoiceLayout/InvoiceTotal.vue';
import AddressInfo from 'src/components/InvoiceLayout/AddressInfo.vue';
import { useInvoiceStore } from 'src/stores/invoice';
import { storeToRefs } from 'pinia';
const invoiceStore = useInvoiceStore();
const {
  id,
  date,
  invoice_date,
  senderAddress,
  receiverAddress,
  bankDetails,
  description,
  items,
  currency,
} = storeToRefs(invoiceStore);

function addNewItem() {
  items.value.push({ description: '', unitPrice: 0, quantity: 0, unit: '' });
}
function deleteItem(index: number) {
  items.value.splice(index, 1);
}

const subtotal = computed(() => {
  return items.value.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );
});

const total = subtotal;
</script>
