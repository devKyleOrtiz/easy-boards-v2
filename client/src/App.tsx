import { Route, Routes } from "react-router-dom";
import UserAuthPage from "./components/UserAuthPage";
import HomePage from "./components/Home/HomePage";

interface AuthPageWrapperProps {
  isSignup: boolean;
}

function App() {
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
