'use client'
import { AuthProvider } from "@/components/Athentication/Authentication";
import { useContext } from "react";

const useAuth = () => {
  const auth = useContext(AuthProvider);
  return auth;
};
export default useAuth;
