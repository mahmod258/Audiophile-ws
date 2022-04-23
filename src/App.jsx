import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/Audiophile-ws" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
