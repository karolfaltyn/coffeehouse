import "../assets/style/style.css";
import { Outlet, Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <section className="flex items-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h1>404</h1>
          <p>We don't have that coffee yet.</p>
          <Link to="/">Let's go back.</Link>
        </div>
      </div>
      <Outlet />
    </section>
  );
};
