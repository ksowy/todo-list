import { Nav } from "./components";
import { Home, Todo } from "./pages";
import { Routes, Route } from "react-router-dom";

export const App = () => (
  <>
    <Nav />
    <div className="w-full h-3/6 bg-[url('/public/img/background.jpg') bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-center absolute z-[-1]"></div>
    <div className="w-3/4 flex-wrap m-auto flex">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  </>
);
