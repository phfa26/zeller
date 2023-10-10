import { gql } from "@apollo/client";

export const ListZellerCustomers = gql(`
  query ListZellerCustomers {
  listZellerCustomers {
    items {
      id
      name
      role
    }
  }
}`)
