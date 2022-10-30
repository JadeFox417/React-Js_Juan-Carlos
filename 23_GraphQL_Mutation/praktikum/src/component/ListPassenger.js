import ListItem from "./ListItem";
import LoadingSvg from "./LoadingSvg";
import useGetAllPassengers from "../hooks/useGetAllPassengers";
import useDeletePassenger from "../hooks/useDeletePassenger";

const ListPassenger = (props) => {
  const { passengersData, passengersLoading, passengersError } = useGetAllPassengers();
  const { deletePassenger, deleteLoading } = useDeletePassenger();

  if (passengersLoading || deleteLoading) {
    return <LoadingSvg />;
  }

  if (passengersError) {
    console.log(passengersError);
    return null;
  }

  const deleteData = (idx) => {
    deletePassenger({
      variables: {
        id: idx,
      },
    });
  };

  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Gender</td>
            <td bgcolor="white" className="removeBorder"></td>
            <td bgcolor="white" className="removeBorder"></td>
          </tr>
        </thead>
        <tbody>
          {passengersData?.passenger.map((item) => (
            <ListItem key={item.id} data={item} hapusPengunjung={deleteData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassenger;
