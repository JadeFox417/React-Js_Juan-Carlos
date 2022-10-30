import React, { useState } from "react";
import ListItem from "./ListItem";
import LoadingSvg from "./LoadingSvg";
import useDeletePassenger from "../hooks/useDeletePassenger";
import useGetPassengerById from "../hooks/useGetPassengerById";

const FindPassengerById = (props) => {
  const { getData, passengerData, passengerLoading, passengerError } = useGetPassengerById();
  const { deletePassenger, deleteLoading } = useDeletePassenger();
  const [dataId, setDataId] = useState(0);

  if (passengerLoading || deleteLoading) {
    return <LoadingSvg />;
  }

  if (passengerError) {
    console.log(passengerError);
    return null;
  }

  const onGetDataById = () => {
    getData({
      variables: {
        id: dataId,
      },
    });
  };

  const onChangeDataId = (e) => {
    if (e.target) {
      setDataId(e.target.value);
    }
  };

  const deleteData = (idx) => {
    deletePassenger({
      variables: {
        id: idx,
      },
    });
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2>Find Passenger By Id</h2>
      <input value={dataId} onChange={onChangeDataId} placeholder="Input passenger id" style={{ margin: "7px" }} />
      <button onClick={onGetDataById}>Get Data</button>
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
          {passengerData?.passenger.map((item) => (
            <ListItem key={item.id} data={item} hapusPengunjung={deleteData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FindPassengerById;
