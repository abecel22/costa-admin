export interface Client {
  email: string;
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
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
  registered: {
    date: string;
  };
}
