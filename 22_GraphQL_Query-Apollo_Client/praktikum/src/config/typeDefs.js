import { gql } from "@apollo/client";

export const GetAllPassenger = gql`
  query MyQuery {
    passenger {
      id
      name
      age
      gender
    }
  }
`;

export const GetPassengerById = gql`
  query MyQuery($id: Int!) {
    passenger(where: { id: { _eq: $id } }) {
      id
      name
      age
      gender
    }
  }
`;
