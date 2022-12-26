import Image from "next/image";
import React from "react";
import styles from "./BaseTemplate.module.css";
import HeaderInterface from "./HeaderInterface";

const Header: React.FC<HeaderInterface> = ({  }) => {

  return (
    <header className="d-flex a-i-center j-c-between sp-4">
      <section className="d-flex a-i-center" style={{height: "100%"}}>
        <Image src={"https://res.cloudinary.com/youmialive/image/upload/v1656710058/perf-evo-short-logo.png"} alt="perfe-logo" width={25} height={25} style={{
          borderRadius: "100%", height: "25px", width: "25px"
          }} />
        <h1 className="has-text-weight-bold">Perfe Auth Service</h1>
      </section>
      <section style={{height: "100%"}} className="d-flex a-i-center">
        <span className="material-icons icon" style={{marginLeft: "var(--space-3)", cursor: "pointer"}}> add</span>
        <span className="material-icons icon" style={{marginLeft: "var(--space-3)", cursor: "pointer"}}> notifications</span>
        <span className="material-icons icon" style={{marginLeft: "var(--space-3)", cursor: "pointer"}}> settings</span>
        
          <Image src={"https://res.cloudinary.com/youmialive/image/upload/v1609430401/users/hcdzs0cbtx6a5r9s6vih.jpg"} alt="perfe-avatar" width={25} height={25} style={{
            borderRadius: "100%", height: "25px", width: "25px", marginLeft: "var(--space-3)", cursor: "pointer"
            }} />
      </section>
    </header>
  )
}

export default Header;