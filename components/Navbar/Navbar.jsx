"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  //return
  return (
    <nav className="flex items-center justify-between px-8 py-4 lg:px-12 xl:px-16">
      <div className="flex items-center space-x-2">
        <Image
          src={logo}
          alt="Picture of the author"
          className="logo xsm:w-[55px] sm:w-[50px] xl:w-[40px] "
        />
        <h2 className="text-[24px] font-bold text-orange-600">IrfShop</h2>
      </div>
      <div className="hidden md:flex md:items-center md:gap-6 xl:gap-8">
        <ul className="md:flex md:gap-12 text-gray-800">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <Link href="/login">
            <li>Login</li>
          </Link>
        </ul>
        {isSearchBarOpen && (
          <div className="">
            <input
              type="text"
              placeholder="Search anything"
              className="border-[1px] border-gray-400 px-2 py-2 rounded-md ransition-all duration-[5s] ease-in-out transform-translate-x-full"
            />
          </div>
        )}

        <FontAwesomeIcon
          icon={faSearch}
          className="w-[30px] h-[18px] text-gray-600 cursor-pointer"
          onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
        />

        <button className="px-4 py-2 my-3 text-white  bg-orange-600 text-[13px]">
          Create Account
        </button>
      </div>
      <div className="content md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
