import Logo from "./Logo";
import Nav from "./Nav";

// CSS MODULES
import styles from "../cssModules/navbar.module.css";

/* eslint-disable react/prop-types */
export default function Navbar({ children }) {
  return (
    <div className={styles.navbarContainer}>
      <Logo />
      {children}
      <Nav />
    </div>
  );
}
