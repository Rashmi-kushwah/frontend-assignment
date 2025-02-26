import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} My Website. All Rights Reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px",
    marginTop: "20px"
  }
};

export default Footer;
