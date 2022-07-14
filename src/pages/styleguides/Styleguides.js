import React, { useState } from "react";
import { useNavigate } from "react-router";
import HandyArticles from "../../components/HandyArticles/HandyArticles.js";
import Modal from "../../components/Modal/Modal";
import "./Styleguides.scss";

export default function Styleguides() {
  // toggle modal
  const [showModal, setShowModal] = useState(false);

  // navigate
  const navigate = useNavigate();

  return (
    <div className="projects">
      {/* menu */}
      <div className="menu">
        <label
          className="menuItem "
          onClick={() => navigate("/projects", { replace: true })}
        >
          Projects
          <input type="radio" name="wordkpaceTab" value="projects"></input>
        </label>
        <label
          className="menuItem active"
          onClick={() => navigate("/styleguides", { replace: true })}
        >
          Styleguides
          <input type="radio" name="workSpaceTab" value="styleguides"></input>
        </label>
        <hr className="hr" />
      </div>

      {/* filter */}
      <div className="filter">
        <div className="sort"></div>
        {/* search */}
        <div className="search">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              // fill="#979197"
              // fill="#554d56"
              style={{ fill: "#979197" }}
              className="fillSvg"
              fill-rule="evenodd"
              d="M2.01 11.715c-2.68-2.68-2.68-7.025 0-9.705 2.68-2.68 7.025-2.68 9.705 0 2.35 2.35 2.64 5.978.87 8.643.034.028.068.06.1.09l2.912 2.913c.536.536.54 1.4 0 1.94-.536.537-1.402.54-1.94 0l-2.913-2.91c-.032-.033-.063-.067-.09-.102-2.666 1.77-6.295 1.48-8.644-.87zm1.94-1.94c1.61 1.607 4.216 1.607 5.824 0 1.608-1.61 1.608-4.216 0-5.824-1.608-1.607-4.215-1.607-5.823 0-1.607 1.61-1.607 4.216 0 5.824z"
            ></path>
          </svg>
          <input type="search" placeholder="Search for a styleguides" />
        </div>
        {/* create project */}
        <button className="createProjectBtn" onClick={() => setShowModal(true)}>
          Create styleguides
        </button>
      </div>

      {/* project list */}
      <div className="projectList">
        <div className="projectItem">
          <img
            className="projectImg"
            src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/screens/5EFC931D-7CE7-4B2E-8781-7F87F81A8E4D.png"
            alt="img"
          ></img>
          <div className="time">
            <span>BASE</span>
            <span>2d</span>
          </div>
          <div className="title">Untitled</div>
          <div className="projectAvatarList">
            <div className="avatarItem">
              <img
                src="https://i2.wp.com/cdn.zeplin.io/assets/webapp/img/emotars/emotarHamster.png?ssl=1"
                alt="avatar"
              ></img>
            </div>
            <div className="avatarItem">
              <img
                src="https://i2.wp.com/cdn.zeplin.io/assets/webapp/img/emotars/emotarHamster.png?ssl=1"
                alt="avatar"
              ></img>
            </div>
            <div className="avatarItem">
              <img
                src="https://i2.wp.com/cdn.zeplin.io/assets/webapp/img/emotars/emotarHamster.png?ssl=1"
                alt="avatar"
              ></img>
            </div>
          </div>
        </div>
        <div className="projectItem">
          <img
            className="projectImg"
            src="https://cdn.zeplin.io/62a2efbd6ba85b1805368d2d/screens/5EFC931D-7CE7-4B2E-8781-7F87F81A8E4D.png"
            alt="img"
          ></img>
          <div className="time">
            <span>BASE</span>
            <span>2d</span>
          </div>
          <div className="title">Untitled</div>
          <div className="projectAvatarList">
            <div className="avatarItem">
              <img
                src="https://i2.wp.com/cdn.zeplin.io/assets/webapp/img/emotars/emotarHamster.png?ssl=1"
                alt="avatar"
              ></img>
            </div>
            <div className="avatarItem">
              <img
                src="https://i2.wp.com/cdn.zeplin.io/assets/webapp/img/emotars/emotarHamster.png?ssl=1"
                alt="avatar"
              ></img>
            </div>
            <div className="avatarItem">
              <img
                src="https://i2.wp.com/cdn.zeplin.io/assets/webapp/img/emotars/emotarHamster.png?ssl=1"
                alt="avatar"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* button bottom */}
      <HandyArticles />

      {/* modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
