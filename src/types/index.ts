export enum UserType {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
}

export type User = {
  id: string;
  name: string;
  role: UserType;
};

export type QueryResponse = {
    data: {
  listZellerCustomers: {
    items: User[];
  };
}
};
