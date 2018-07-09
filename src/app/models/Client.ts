export interface Client {
  email: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  name: {
    first: string;
    last: string;
  };
  phone: string;
  picture: {
    large: string;
    small: string;
    thumbnail: string;
  };
  registered: string;
}
