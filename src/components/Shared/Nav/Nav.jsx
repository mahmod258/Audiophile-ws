import React from "react";
import Products from "../Products/Products";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="container-md text-white">
        <div className=" d-flex align-items-center justify-content-between">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="d-none"
            onClick={() => setToggle(!toggle)}
          >
            <rect width="16" height="3" fill="white" />
            <rect y="6" width="16" height="3" fill="white" />
            <rect y="12" width="16" height="3" fill="white" />
          </svg>
          <h1 className="m-0 fw-bolder">audiophile</h1>
        </div>
        <ul className="list-unstyled m-0">
          <li className="d-inline ms-4 me-4 fw-bold">
            <Link to="/Audiophile-ws">HOME</Link>
          </li>
          <li className="d-inline ms-4 me-4 fw-bold">
            <Link to="/Audiophile-ws/headphones">HEADPHONES</Link>
          </li>
          <li className="d-inline ms-4 me-4 fw-bold">
            <Link to="/Audiophile-ws/speakers">SPEAKERS</Link>
          </li>
          <li className="d-inline ms-4 me-4 fw-bold">
            <Link to="/Audiophile-ws/earphones">EARPHONES</Link>
          </li>
        </ul>
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.51883 13.1946H7.51776C7.14161 13.1955 6.83595 13.491 6.83595 13.8542C6.83595 14.2179 7.14268 14.5139 7.51954 14.5139H19.9154C20.293 14.5139 20.599 14.8092 20.599 15.1736C20.599 15.538 20.293 15.8333 19.9154 15.8333H18.75H8.75H7.51954C6.38876 15.8333 5.46876 14.9455 5.46876 13.8542C5.46876 13.0421 5.97843 12.343 6.70493 12.0382L4.23686 1.31944H0.683595C0.306016 1.31944 0 1.02412 0 0.659722C0 0.295329 0.306016 0 0.683595 0H4.78516C5.1056 0 5.38295 0.214753 5.45256 0.516611L5.94122 2.63889H22.6498C22.8643 2.63889 23.0663 2.73613 23.1956 2.9014C23.3246 3.06668 23.3659 3.28074 23.307 3.47986L20.5726 12.716C20.4888 12.9991 20.2205 13.1944 19.9154 13.1944H7.5215L7.51883 13.1946ZM8.75 15.8333C9.89873 15.8333 10.8333 16.7679 10.8333 17.9167C10.8333 19.0654 9.89873 20 8.75 20C7.60127 20 6.66667 19.0654 6.66667 17.9167C6.66667 16.7679 7.60127 15.8333 8.75 15.8333ZM18.75 15.8333C19.8987 15.8333 20.8333 16.7679 20.8333 17.9167C20.8333 19.0654 19.8987 20 18.75 20C17.6013 20 16.6667 19.0654 16.6667 17.9167C16.6667 16.7679 17.6013 15.8333 18.75 15.8333ZM19.3997 11.875L21.7435 3.95833H6.24492L8.06784 11.875H19.3997ZM9.44444 17.9167C9.44444 17.5338 9.13285 17.2222 8.75 17.2222C8.36715 17.2222 8.05556 17.5338 8.05556 17.9167C8.05556 18.2995 8.36715 18.6111 8.75 18.6111C9.13285 18.6111 9.44444 18.2995 9.44444 17.9167ZM18.75 17.2222C19.1328 17.2222 19.4444 17.5338 19.4444 17.9167C19.4444 18.2995 19.1328 18.6111 18.75 18.6111C18.3672 18.6111 18.0556 18.2995 18.0556 17.9167C18.0556 17.5338 18.3672 17.2222 18.75 17.2222Z"
            fill="white"
          />
        </svg>
      </div>
      {toggle ? (
        <div className="small-menu">
          <Products />
        </div>
      ) : null}
    </nav>
  );
}

export default Nav;
