import { API, graphqlOperation } from 'aws-amplify';
import { ListZellerCustomers } from '../graphql/queries';

export const fetchUsers = async () => {
  const response = await API.graphql(graphqlOperation(ListZellerCustomers));
  return response.data.listZellerCustomers.items;
};