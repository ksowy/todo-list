import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="bg-white">
      <div className="w-3/4 m-auto flex justify-between items-center">
        <h3 className="mr-8 last:mr-0">
          <Link to="/" className="text-slate-500">
            Home Page
          </Link>
        </h3>

        <h3 className="mr-8 last:mr-0">
          <Link to="/todos" className="text-slate-500">
            Todos
          </Link>
        </h3>
      </div>
    </div>
  );
};
