import React, { useEffect, useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", pathe: "/home" },
    { id: 2, name: "About", pathe: "/about" },
    { id: 3, name: "Contact", pathe: "/contact" },
    { id: 4, name: "Orders", pathe: "/orders" },
    { id: 5, name: "Products", pathe: "/products" },
  ];
  return (
    <nav className="bg-purple-400">
      <div onClick={() => setOpen(!open)} className="h-7 w-7 md:hidden">
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
      </div>
      <ul className={`md:flex justify-center bg-purple-400 w-full absolute md:static duration-300 ease-linear ${open ? 'top-7': 'top-[-200px]'}`}>
        {routes.map((route) => (
          <Link key={route.id} routes={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
