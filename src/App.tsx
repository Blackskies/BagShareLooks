import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostLoginLayout from "./components/layout/post_login_layout";

const Login = lazy(() => import("./pages/login"));
const BagResults = lazy(() => import("./components/views/bags/bag_results"));
const Flights = lazy(() => import("./pages/flights"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PostLoginLayout />}>
          <Route path="/flights" element={<Flights />} />
          <Route path="/bags" element={<BagResults />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
