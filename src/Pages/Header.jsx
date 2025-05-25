import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-white text-xl font-bold">
            Learn React Query
          </span>
          <ul className="space-x-4 flex gap-7">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active " : "text-[#90e0ef] hover:text-[#fffcf9]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trad"
                className="text-[#90e0ef] hover:text-[#fffcf9]"
              >
                Fetch Old
              </NavLink>
            </li>
            <li>
              <NavLink to="/rq" className="text-[#90e0ef] hover:text-[#fffcf9]">
                Fetch RQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/infinite"
                className="text-[#90e0ef] hover:text-[#fffcf9]"
              >
                Infinite
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
