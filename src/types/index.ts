export type UserType = 'ADMIN' | 'MANAGER';

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
