import {
  createContext,
  useEffect,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

export interface AppUser {
  name: string | null;
  roles: string[];
  email: string | null;
}

const defaultAppUser: AppUser = {
  name: null,
  roles: [],
  email: null,
};

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

type AuthProviderProps = PropsWithChildren;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);

  // TODO: Read data from local storage to user and roles
  useEffect(() => {
    console.log("RUN ON START OF USE EFFECT");

    const localName = localStorage.getItem("user");
    const localEmail = localStorage.getItem("email");
    const localRoles = localStorage.getItem("roles");

    if (localName != null && localEmail != null && localRoles != null) {
      const localUser: AppUser = {
        name: localName,
        roles: JSON.parse(localRoles),
        email: localEmail,
      };

      setUser(localUser);
      setIsAuthenticated(true);
      console.log("Filled local storage");
    } else {
      setUser(defaultAppUser);
      setIsAuthenticated(false);
    }
  }, []);

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

    if (name != null) {
      localStorage.setItem("user", name);
    }
    localStorage.setItem("roles", JSON.stringify(roles));
    if (email != null) {
      localStorage.setItem("email", email);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(defaultAppUser);
    setAccessToken(undefined);
    localStorage.clear();
  };

  const updateAccessToken = (accessToken: string) => {
    return setAccessToken(accessToken);
  };

  const authContextValue: AuthContextType = {
    user: user,
    isAuthenticated: isAuthenticated,
    accessToken: accessToken,
    updateAccessToken: updateAccessToken,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
