import { useMutation } from "@apollo/client";
import { AddPassenger } from "../config/AddPassenger";
import { GetAllPassengers } from "../config/GetAllPassengers";

const useAddPassenger = () => {
  const [addPassenger, { loading: addLoading }] = useMutation(AddPassenger, {
    refetchQueries: [GetAllPassengers],
  });

  return { addPassenger, addLoading };
};

export default useAddPassenger;
