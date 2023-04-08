import { gql } from 'apollo-server';

export const apiFiltersTypedefs = gql`
  input apiFiltersInput {
    _sort: String
    _order: apiFilterOrder
    _start: Int
    _limit: Int
  }

  enum apiFilterOrder {
    ASC
    DESC
  }
`;
