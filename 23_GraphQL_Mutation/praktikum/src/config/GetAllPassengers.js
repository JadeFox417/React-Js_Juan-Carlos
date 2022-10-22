import { gql } from "@apollo/client";

export const GetAllPassengers = gql`
  query MyQuery {
    passenger {
      id
      name
      age
      gender
    }
  }
`;
