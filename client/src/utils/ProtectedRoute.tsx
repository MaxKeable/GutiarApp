import { ReactNode, useEffect } from "react";


const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    console.log("HERE");
    const token = localStorage.getItem("userCredentials");
    if (!token) {
      //   <Navigate to="/login" replace />;
      document.location.replace("/login");
      console.log(" HERE WITH TOKEN");
    }
    console.log("Token: ", token);
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
