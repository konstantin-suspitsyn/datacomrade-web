import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useAxiosPrivate from "../../hooks/useAxiousPrivate";

const Me = () => {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const getInfoAboutMe = () => {
    axiosPrivate
      .get("/v1/users/me")
      .then((response) => {
        console.log("rd", response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      <button onClick={getInfoAboutMe}>Me?</button>
    </div>
  );
};

export default Me;
