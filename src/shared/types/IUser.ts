import type { EntityState } from "@reduxjs/toolkit";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  // Add more properties as needed
}

export type UsersState = EntityState<User, number> & {
  loading: boolean;
  error: string | null;
};

export interface UserCardProps {
  user: User;
}
