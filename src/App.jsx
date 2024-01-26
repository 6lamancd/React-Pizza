// import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import MainInner from "./components/Layout/Main/mainInner";
import Main from "./components/Layout/Main";
import NotFoundPage from "./components/Layout/Main/notfoundpage";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route element={<OtherPage />} /> */}
          <Route path="/MainInner" element={<MainInner />} />
          <Route path="/" index element={<Main />} />
          <Route path="/NotFoundPage" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
