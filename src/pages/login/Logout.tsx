import { useEffect } from "react";
import { useNavigate } from "react-router";
import { api } from "../../components/Api";
import { useAuth } from "../../hooks/useAuth";

const LOGOUT_URL = "/v1/users/refresh";

export const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    api
      .delete(LOGOUT_URL, { withCredentials: true })
      .then(() => {
        auth.logout();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div></div>;
};
