import type { EntityState } from "@reduxjs/toolkit";
import type { ReactNode } from "react";

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
}

export type UsersState = EntityState<User, number> & {
  loading: boolean;
  error: Error | null;
};

export interface UserProps {
  user: User;
}

export interface MockGridProps {
  children: ReactNode;
  data: { data: User[] };
  onDataStateChange: (event: { dataState: { skip: number } }) => void;
}
