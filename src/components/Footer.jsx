import React from "react";

export default function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Johnson Emmanuel</span>
      <a
        href="https://github.com/Johnson1425-ux"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
