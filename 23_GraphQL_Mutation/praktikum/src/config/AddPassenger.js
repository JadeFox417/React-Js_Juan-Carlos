import { gql } from "@apollo/client";

export const AddPassenger = gql`
  mutation MyMutation($name: String, $age: Int, $gender: String) {
    insert_passenger(objects: { name: $name, age: $age, gender: $gender }) {
      returning {
        id
        name
        age
        gender
      }
    }
  }
`;
