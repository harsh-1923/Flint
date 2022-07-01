import React from "react";
import "./LinkView.css";

import { useNavigate } from "react-router-dom";

const LinkView = ({ link }) => {
  console.log("/${link.workspaceID}");
  const navigate = useNavigate();
  return (
    <div className="lv-wrapper">
      <svg
        className="icon tv-icon"
        stroke="currentColor"
        fill="none"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1.2em"
        width="1.2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"
          fill="currentColor"
        ></path>
        <path
          d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z"
          fill="currentColor"
        ></path>
        <path
          d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z"
          fill="currentColor"
        ></path>
      </svg>
      
      {link ? (
        <>
          <a href={link.url} className="link" target="_blank">
            <p className="link-title">{link.title}</p>
          </a>
          <button
            className="btn-light pointer"
            onClick={() => navigate(`/${link.workspaceID}`)}
          >
            Visit Parent Workspace
          </button>
        </>
      ) : (
        <p>No Links found..</p>
      )}
    </div>
  );
};

export default LinkView;
