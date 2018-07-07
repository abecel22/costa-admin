export interface Client {
  first: string;
  last: string;
  email: string;
  phone: string;
  registered: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}
