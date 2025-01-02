import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/to-do" element={<Todo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
