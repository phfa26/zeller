export type UserType = 'Admin' | 'Manager';

export type User = {
  id: string;
  name: string;
  role: UserType;
};

export type QueryResponse = {
  listZellerCustomers: {
    items: User[];
  };
};
