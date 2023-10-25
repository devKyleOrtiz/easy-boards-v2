import { Route, Routes } from "react-router-dom";
import UserAuthPage from "./components/UserAuthPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<UserAuthPage />} />
      </Routes>
    </>
  );
}

export default App;
