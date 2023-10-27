// src/store/invoice.ts
import { defineStore } from 'pinia';
import { Address, BankDetails, InvoiceState } from './types';
const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const useInvoiceStore = defineStore('invoice', {
  state: (): InvoiceState => ({
    id: 1,
    date: formatDate(new Date()),
    description: 'Note',
    currency: '€',
    items: [
      {
        description: '',
        unitPrice: 0,
        quantity: 1,
        unit: '',
      },
    ],
    senderAddress: {
      name: 'L&CH LIMITED',
      streetAddress: '128 City Road',
      city: 'Londres',
      postalCode: 'EC1V 2NX',
      country: 'Royaume-uni',
      companyNumber: 14816224,
    },
    receiverAddress: {
      name: 'name',
      streetAddress: 'streetAddress',
      city: 'city',
      postalCode: 'postalCode',
      country: 'country',
    },
    bankDetails: {
      IBAN: '',
      SWIFT: '',
      address: {
        name: '',
        streetAddress: '',
        city: '',
        postalCode: '',
        country: '',
      },
    },
  }),
  persist: true,
  getters: {
    invoice_date({ date }) {
      const parts = date.split('/');
      if (parts.length === 3) {
        const [day, month, year] = parts;
        return `${year}${month}${day}`;
      }
    },
  },
  actions: {
    updateAddress(
      key: 'senderAddress' | 'receiverAddress',
      update: Partial<Address>
    ) {
      Object.assign(this[key], update);
    },
    updateBankDetails(update: Partial<BankDetails>) {
      Object.assign(this.bankDetails, update);
    },
  },
});
