import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  return (
    <header className="w-full h-[80px] md:h-[130px] border-t-4 border-[#e27631] bg-[#f9f8f9] flex md:gap-20 lg:gap-[150px] justify-between md:justify-center px-3 items-center fixed top-0 left-0 shadow-md md:shadow-none">
      <Link to="/">
        <div className="flex gap-2 items-center">
          <img
            alt=""
            src="/images/icons8-card-50.png"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <h1 className="text-[.85rem] md:text-[1rem] font-medium md:font-bold uppercase">
            Computerized Student ID System
          </h1>
        </div>
      </Link>
      <img
        onClick={handleClick}
        alt=""
        src="/images/icons8-menu-30.png"
        className="w-7 h-7 block md:hidden"
      />
      <ul className="gap-5 items-center hidden md:flex">
        <Link to="/about">
          <li className="hover:text-[#e27631] cursor-pointer">About</li>
        </Link>
        <li>
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 bg-[#e27631] uppercase text-[.85rem] text-white font-medium hover:bg-[#e27631]/70"
          >
            Apply for id
          </button>
        </li>
      </ul>

      {/* mobile dropdown */}
      {openMenu && (
        <div className="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0 lg:hidden">
          <img
            className="w-[30px] h-[30px] cursor-pointer mr-[25px] absolute top-4 right-0 text-white"
            alt=""
            src="/images/icons8-cancel-50.png"
            onClick={() => {
              handleClick();
            }}
          />
          <ul className="slide float-right w-full h-[250px] bg-[#e27631] py-10 text-white gap-3 items-center md:hidden flex flex-col">
            <Link
              onClick={() => {
                handleClick();
              }}
              to="/about"
            >
              <li className="py-2 border-b border-white/50">About</li>
            </Link>
            <Link
              onClick={() => {
                handleClick();
              }}
              to="/"
            >
              <li className="py-2 border-b border-white/50">Apply for id</li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
