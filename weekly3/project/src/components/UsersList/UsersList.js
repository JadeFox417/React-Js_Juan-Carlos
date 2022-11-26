import React, { useEffect } from "react";
import { CCol, CContainer, CRow } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/features/usersSlice";
import Background from "../../assets/secondary_bg.jpg";

const UsersList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <div className="fluid" style={{ backgroundImage: `url(${Background})` }}>
        <CContainer>
          <p className="fs-1 py-5">Introducing Our Success Team</p>
          <CRow>
            {user.data.user?.map((item) => (
              <CCol key={item.id} md="auto" lg={4} className="my-5">
                <img src={item.avatar} className="rounded-circle" width={200} alt="avatar" />
                <p className="fs-5 fw-bold mt-3">{item.name}</p>
                <p className="fs-5 mt-3">{item.job}</p>
              </CCol>
            ))}
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default UsersList;
