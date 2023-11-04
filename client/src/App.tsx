import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import UserAuthPage from "./components/UserAuthPage";
import HomePage from "./components/Home/HomePage";
import useUserStore from "./lib/usercontext";
import { NextUIProvider } from "@nextui-org/react";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import { useEffect } from "react";
import getUser from "./actions/getUser";

interface AuthPageWrapperProps {
  isSignup: boolean;
}

function App() {
  const navigate = useNavigate();
  const { data } = getUser();
  const { setUser } = useUserStore();
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);
  return (
    <>
      <NextUIProvider navigate={navigate}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/sign-up"
            element={<AuthPageWrapper isSignup={true} />}
          />
          <Route path="/login" element={<AuthPageWrapper isSignup={false} />} />
          <Route path="/users/:id/dashboard" element={<DashboardLayout />} />
        </Routes>
      </NextUIProvider>
    </>
  );
}

function AuthPageWrapper({ isSignup }: AuthPageWrapperProps) {
  const { user } = useUserStore();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <UserAuthPage signup={isSignup} />;
}

export default App;
