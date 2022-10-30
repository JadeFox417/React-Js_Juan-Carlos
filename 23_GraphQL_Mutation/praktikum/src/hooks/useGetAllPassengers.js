import { useQuery } from "@apollo/client";
import { GetAllPassengers } from "../config/GetAllPassengers";

const useGetAllPassengers = () => {
  const { data: passengersData, loading: passengersLoading, error: passengersError } = useQuery(GetAllPassengers);
  return { passengersData, passengersLoading, passengersError };
};

export default useGetAllPassengers;
