import { gql } from "@apollo/client";

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
