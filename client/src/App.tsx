import { Route, Routes } from "react-router-dom";
import UserAuthPage from "./components/UserAuthPage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import getUser from "./actions/getUser";
import { Spinner } from "./lib/spinner";
import HomePage from "./components/Home/HomePage";

interface AuthPageWrapperProps {
  isSignup: boolean;
}

function App() {
  const { data, isLoading, isError } = getUser();

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
        <Route path="/" element={<HomePage />} />
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
