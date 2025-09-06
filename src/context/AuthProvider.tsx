import { createContext, useState, type FC, type ReactNode } from "react";

interface AppUser {
  name: string | null;
  roles: string[];
  email: string | null;
}

const defaultAppUser: AppUser = {
  name: null,
  roles: [],
  email: null,
};

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  user: AppUser | null;
  isAuthenticated: boolean;
  accessToken: string | undefined;
  updateAccessToken: (token: string) => void;
  login: (
    name: string | null,
    roles: string[],
    accessToken: string,
    email: string | null,
  ) => void;
  logout: () => void;
}

const defaultAuthContextType: AuthContextType = {
  user: defaultAppUser,
  isAuthenticated: false,
  accessToken: undefined,
  updateAccessToken: () => {},
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContextType);

const AuthProvider: FC<AuthProviderProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<AppUser | null>(defaultAppUser);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);

  const login = (
    name: string | null,
    roles: string[],
    accessToken: string,
    email: string | null,
  ) => {
    const user: AppUser = {
      name: name,
      roles: roles,
      email: email,
    };

    setUser(user);
    setIsAuthenticated(true);
    setAccessToken(accessToken);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(defaultAppUser);
    setAccessToken(undefined);
  };

  const updateAccessToken = (accessToken: string) => {
    return setAccessToken(accessToken);
  };

  const authContextValue: AuthContextType = {
    user,
    isAuthenticated,
    accessToken,
    updateAccessToken,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
