import styles from "./app.module.css";
import { Nav } from "./components/nav";
import { Home } from "./pages/home";
import { Todo } from "./pages/todo";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Nav />
      <div className={styles.background}></div>
      <div className={styles.container}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </>
  );
};
