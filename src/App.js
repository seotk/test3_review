import "./css/App.css";
import list from "./pages/productData";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  let subName = useLocation().pathname;
  console.log(subName);
  let [data] = useState(list);
  return (
    <div className="App">
      <Header pathName={subName} />
      <Routes>
        <Route path="/" element={<Main list={data} />}></Route>
        <Route path="/Shop" element={<Shop list={data} />}></Route>
        <Route path="/Blog" element={<div>블로그</div>}></Route>
        <Route path="/Story" element={<div>스토리</div>}></Route>
        <Route path="/Detail/:id" element={<Detail list={data} />}></Route>
        <Route path="*" element={<div>404..</div>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
