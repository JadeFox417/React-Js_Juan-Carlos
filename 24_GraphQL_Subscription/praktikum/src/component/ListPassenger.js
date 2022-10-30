import ListItem from "./ListItem";
import LoadingSvg from "./LoadingSvg";
import useSubscriptionPassenger from "../hooks/useSubscriptionPassenger";
import useDeletePassenger from "../hooks/useDeletePassenger";

const ListPassenger = (props) => {
  const { subscriptionData, subscriptionLoading, subscriptionError } = useSubscriptionPassenger();
  const { deletePassenger, deleteLoading } = useDeletePassenger();

  if (subscriptionLoading || deleteLoading) {
    return <LoadingSvg />;
  }

  if (subscriptionError) {
    console.log(subscriptionError);
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
          {subscriptionData?.passenger.map((item) => (
            <ListItem key={item.id} data={item} hapusPengunjung={deleteData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassenger;
