import { gql } from "@apollo/client";

export const SubscriptionPassenger = gql`
  subscription MySubscription {
    passenger {
      id
      name
      age
      gender
    }
  }
`;
