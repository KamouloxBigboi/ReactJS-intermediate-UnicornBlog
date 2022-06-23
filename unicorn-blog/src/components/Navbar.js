import React from 'react';
import {  Link, useResolvedPath, useMatch } from "react-router-dom";

export default function Navbar () {
  return (
    <div>
        <nav className='nav'>
            <ul>
              <li>
                <Link to="/homepage"> Homepage </Link>
              </li>
                <CustomLink to="/upload"> Upload </CustomLink>
                <CustomLink to="/gallery"> Gallery </CustomLink>
            </ul>
        </nav>
    </div>
  );
}

function CustomLink({to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return (
    <li className={ isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}