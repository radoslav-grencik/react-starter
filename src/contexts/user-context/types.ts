export type User = unknown;

export type AuthContextType = {
  user: User | null;
  isAuthorized: boolean;
  login: () => void;
  logout: () => void;
  toggleLogin: () => void;
};
