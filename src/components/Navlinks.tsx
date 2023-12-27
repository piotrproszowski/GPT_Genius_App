import Link from "next/link";
import React from "react";

const links = [
  { id: 1, label: "Chat", href: "/chat" },
  { id: 2, label: "Tours", href: "/tours" },
  { id: 3, label: "New tour", href: "/tours/new-tour" },
  { id: 4, label: "Profile", href: "/profile" },
];

const Navlinks = () => {
  return (
    <div className='menu text-base-content'>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Navlinks;
