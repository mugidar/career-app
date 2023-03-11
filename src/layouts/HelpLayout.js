import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsam
        optio accusantium vero, consectetur commodi.
      </p>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export default HelpLayout;
