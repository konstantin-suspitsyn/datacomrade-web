import { api } from "../components/Api";
import { useAuth } from "./useAuth";

interface AccessToken {
  access_token: string;
}

export const useRefreshToken = () => {
  const authContextValue = useAuth();

  const refresh = async () => {
    const response = await api.get<AccessToken>("/refresh", {
      withCredentials: true,
    });
    authContextValue.updateAccessToken(response.data.access_token);
    return response.data.access_token;
  };
  return refresh;
};
