import SearchComponent from "./Search";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import React from 'react';

const BUSINESS_ID =
  "QnVzaW5lc3NOb2RlOmI0OTllOGVlLTliZWUtNGE5NC1iNGJjLTZkZmRkNzI5ZTFkYQ==";

const GET_SUPPLIERS_QUERY = gql`
  query GET_SUPPLIERS_QUERY($businessId: ID!) {
    businessSuppliers(businessId: $businessId) {
      edges {
        node {
          id
          displayName
        }
      }
    }
  }
`;


export default function Search() {
  return  <Query query={GET_SUPPLIERS_QUERY} variables={{ businessId: BUSINESS_ID }}>
    {({ loading, error, data }) => {
      if (loading) {
        return "Loading...";
      }
      const bs = data.businessSuppliers.edges.map((sp) => sp.node);
      return (
          <SearchComponent businessSuppliers={bs} />
      );
    }}
  </Query>
};