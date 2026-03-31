import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SuperAdmin from "./pages/SuperAdmin";
import Admin from "./pages/Admin";
import User from "./pages/User";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/super" element={
          <ProtectedRoute role="SUPER_ADMIN">
            <SuperAdmin />
          </ProtectedRoute>
        } />

        <Route path="/admin" element={
          <ProtectedRoute role="ADMIN">
            <Admin />
          </ProtectedRoute>
        } />

        <Route path="/user" element={
          <ProtectedRoute role="USER">
            <User />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;