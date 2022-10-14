import { GiVikingHelmet } from "react-icons/gi";
import "./style.css";

export default function Header() {
  return (
    <header className="flexer">
      <GiVikingHelmet className="icon" />
      <nav>
        <ul>
          <li>
            <a href="#videos">Videos</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#merch">Merch</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
