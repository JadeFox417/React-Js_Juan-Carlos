import React, { useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import ListItem from "./ListItem";
import LoadingSvg from "./LoadingSvg";
import { GetAllPassenger, GetPassengerById } from "../config/typeDefs";

const ListPassenger = (props) => {
  // const { data, loading, error } = useQuery(GetAllPassenger);
  const [getData, { data, loading, error }] = useLazyQuery(GetPassengerById);
  const [dataId, setDataId] = useState(0);

  if (loading) {
    return <LoadingSvg />;
  }

  if (error) {
    console.log(error);
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

  return (
    <div>
      <input value={dataId} onChange={onChangeDataId} placeholder="input passenger id" style={{ margin: "7px" }} />
      <button onClick={onGetDataById}>Get Data</button>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <tr>
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td bgcolor="white" className="removeBorder"></td>
          </tr>
        </thead>
        <tbody>
          {data?.passenger.map((item) => (
            <ListItem key={item.id} data={item} hapusPengunjung={props.hapusPengunjung} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassenger;
