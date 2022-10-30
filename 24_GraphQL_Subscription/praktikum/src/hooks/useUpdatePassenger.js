import { useMutation } from "@apollo/client";
import { UpdatePassenger } from "../config/UpdatePassenger";
import { GetAllPassengers } from "../config/GetAllPassengers";

const useUpdatePassenger = () => {
  const [updatePassenger] = useMutation(UpdatePassenger, {
    refetchQueries: [GetAllPassengers],
  });

  return { updatePassenger };
};

export default useUpdatePassenger;
