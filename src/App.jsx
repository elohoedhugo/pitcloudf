import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout/RootLayout";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import OTP from "./components/OTP/OTP";
import ManualHot from "./components/ManualHot/ManualHot";
import SecondHome from "./components/SecondHome/SecondHome";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Login />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="/secondhome" element={<SecondHome />} />
        <Route path="manualhot" element={<ManualHot />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
