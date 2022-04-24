import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Shared/Nav/Nav";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <main>
      <Nav />
      <Router>
        <Routes>
          <Route path="/Audiophile-ws" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
