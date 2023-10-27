import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import UserAuthPage from "./components/UserAuthPage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import getUser from "./actions/getUser";
import { Spinner } from "./lib/spinner";
import { useEffect } from "react";

interface AuthPageWrapperProps {
  isSignup: boolean;
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const shouldGetUser = !["/login", "/sign-up"].includes(location.pathname);
  const { data, isLoading, isError } = shouldGetUser
    ? getUser()
    : { data: null, isLoading: false, isError: false };

  useEffect(() => {
    // Only redirect if not on the login or sign-up paths
    if (
      (isError || !data) &&
      !["/login", "/sign-up"].includes(location.pathname)
    ) {
      navigate("/login");
    }
  }, [isError, data, navigate, location.pathname]);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={data ? <DashboardLayout userData={data} /> : <Spinner />}
        />
        <Route path="/sign-up" element={<AuthPageWrapper isSignup={true} />} />
        <Route path="/login" element={<AuthPageWrapper isSignup={false} />} />
      </Routes>
    </>
  );
}

function AuthPageWrapper({ isSignup }: AuthPageWrapperProps) {
  return <UserAuthPage signup={isSignup} />;
}

export default App;
