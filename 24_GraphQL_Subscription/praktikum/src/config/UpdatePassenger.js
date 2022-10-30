import { gql } from "@apollo/client";

export const UpdatePassenger = gql`
  mutation MyMutation($id: Int, $name: String, $age: Int, $gender: String) {
    update_passenger(where: { id: { _eq: $id } }, _set: { name: $name, age: $age, gender: $gender }) {
      returning {
        id
        name
        age
        gender
      }
    }
  }
`;
