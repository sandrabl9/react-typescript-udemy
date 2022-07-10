import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";
import "../index.css";
import { LazyPage2, LazyPage3 } from "../01-lazyload/pages/index";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo React" />
          <ul>
            <li>
              <NavLink
                to="/shopping"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="shopping" element={<ShoppingPage />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />
          <Route path="/*" element={<Navigate to="/shopping" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
