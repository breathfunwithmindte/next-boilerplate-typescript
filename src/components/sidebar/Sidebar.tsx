import React from "react";
import styles from "./BaseTemplate.module.css"
import sidebarDefault from "./SidebarDefault";
import SidebarInterface, { Navigation } from "./SidebarInterface";


const Sidebar: React.FC<SidebarInterface> = ({}=sidebarDefault) => {

  return (
    <nav className="sidebar">
      <ul className="w-f spt-3">
        {sidebarDefault.navigations.map((navigation: Navigation, index: Number) => {
          return (
            <li className="w=f d-flex a-i-center">
             <p className="has-text-weight-bold">{navigation.label}</p>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Sidebar;