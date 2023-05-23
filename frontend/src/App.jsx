import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />}></Route>
    </Routes>
  );
}

export default App;
