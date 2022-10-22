import { useMutation } from "@apollo/client";
import { DeletePassenger } from "../config/DeletePassenger";
import { GetAllPassengers } from "../config/GetAllPassengers";

const useDeletePassenger = () => {
  const [deletePassenger, { loading: deleteLoading }] = useMutation(DeletePassenger, {
    refetchQueries: [GetAllPassengers],
  });
  return { deletePassenger, deleteLoading };
};

export default useDeletePassenger;
