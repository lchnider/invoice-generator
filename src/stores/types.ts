export interface BankDetails {
  IBAN: string;
  SWIFT: string;
  address: Address;
}

export interface Address {
  name?: string;
  streetAddress: string;
  city?: string;
  postalCode: string;
  country: string;
  companyNumber?: number;
}

export interface InvoiceState {
  id: number;
  date: string;
  description: string;
  currency: string;
  senderAddress: Address;
  receiverAddress: Address;
  bankDetails: BankDetails;
  items: InvoiceItem[];
}

interface InvoiceItem {
  description: string;
  unitPrice: number;
  quantity: number;
  unit: string;
}
