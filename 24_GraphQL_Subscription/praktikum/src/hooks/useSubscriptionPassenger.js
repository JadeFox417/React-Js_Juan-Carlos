import { useSubscription } from "@apollo/client";
import { SubscriptionPassenger } from "../config/SubscriptionPassenger";

const useSubscriptionPassenger = () => {
  const { data: subscriptionData, loading: subscriptionLoading, error: subscriptionError } = useSubscription(SubscriptionPassenger);

  return { subscriptionData, subscriptionLoading, subscriptionError };
};

export default useSubscriptionPassenger;
