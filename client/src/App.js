import Navbara from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import NewArticle from "./pages/NewArticle/NewArticle";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Navbara />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={user ? <HomePage /> : <Register />} />
        <Route path="/login" element={user ? <HomePage /> : <Login />} />
        <Route
          path="/newArticle"
          element={user ? <NewArticle /> : <NewArticle />}
        />
        <Route path="/settings" element={user ? <Settings /> : <Settings />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
