import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header-wrapper">
      <h1>PIEDRA_PAPEL_TIJERAS_LAGARTO_SPOCK</h1>

      <Link to={"/Game"}>
        <Button text={"GO TO GAME"} />
      </Link>
    </div>
  );
};

export default Header;
