import axios from "../api/Axios";
import UseAuth from "./UseAuth";

const UseRefreshToken = () => {
  const { setAuth } = UseAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.access_token);
      return { ...prev, accessToken: response.data.access_token };
    });
    return response.data.access_token;
  };
  return refresh;
};

export default UseRefreshToken;
