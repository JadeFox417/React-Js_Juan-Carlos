import { useLazyQuery } from "@apollo/client";
import { GetPassengerById } from "../config/GetPassengerById";

const useGetPassengerById = () => {
  const [getData, { data: passengerData, loading: passengerLoading, error: passengerError }] = useLazyQuery(GetPassengerById);
  return { getData, passengerData, passengerLoading, passengerError };
};

export default useGetPassengerById;
