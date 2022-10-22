import { gql } from "@apollo/client";

export const DeletePassenger = gql`
  mutation MyMutation($id: Int!) {
    delete_passenger_by_pk(id: $id) {
      id
      name
      age
      gender
    }
  }
`;
