/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { ROLES, ROLE_PERMISSIONS, MOCK_USERS } from "../data/users";
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const mockUser = MOCK_USERS[0];
    setCurrentUser(mockUser);
    setIsAuthenticated(true);
  }, []);

  const login = (username) => {
    const user = MOCK_USERS.find((u) => u.username === username);
    if (user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const switchUser = (username) => {
    return login(username);
  };

  const hasModuleAccess = (moduleId) => {
    if (!currentUser) return false;
    const permissions = ROLE_PERMISSIONS[currentUser.role];
    return permissions?.modules?.includes(moduleId) || false;
  };

  const hasActionAccess = (moduleId, actionId) => {
    if (!currentUser) return false;
    const permissions = ROLE_PERMISSIONS[currentUser.role];
    return permissions?.actions?.[moduleId]?.includes(actionId) || false;
  };

  const getAccessibleModules = () => {
    if (!currentUser) return [];
    const permissions = ROLE_PERMISSIONS[currentUser.role];
    return permissions?.modules || [];
  };

  const getRoleDisplayName = (role) => {
    const roleNames = {
      [ROLES.ADMINISTRADOR]: "Administrador",
      [ROLES.MEDICO]: "Médico",
      [ROLES.RECEPCIONISTA]: "Recepcionista",
      [ROLES.FARMACEUTICO]: "Farmacéutico",
      [ROLES.ENFERMERIA]: "Enfermería",
      [ROLES.TECNICO]: "Técnico",
    };
    return roleNames[role] || role;
  };

  const value = {
    currentUser,
    isAuthenticated,
    login,
    logout,
    switchUser,
    hasModuleAccess,
    hasActionAccess,
    getAccessibleModules,
    getRoleDisplayName,
    mockUsers: MOCK_USERS,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
