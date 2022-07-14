import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import HandleClickOutside from "../../components/HandleClickOutside/HandleClickOutside.js";
import HandyArticles from "../../components/HandyArticles/HandyArticles";
import Modal from "../../components/Modal/Modal";
import "./Projects.scss";

export default function Projects() {
  // set open sort
  const ref = useRef(null);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [bgColor, setBgColor] = useState("#fff");
  const [option, setOption] = useState("Created");
  const [toggleCheck, SetToggleCheck] = useState(false);
  const toggleDropdown = () => {
    if (isOpenSort === false) {
      setBgColor("#ccc");
      setIsOpenSort(true);
    }
    if (isOpenSort === true) {
      setBgColor("#fff");
      setIsOpenSort(false);
    }
  };
  HandleClickOutside(ref, () => {
    setIsOpenSort(false);
    setBgColor("#fff");
  });

  const handleSelectOption = (e) => {
    const value = e.currentTarget.getAttribute("value");
    setOption(value);
    setIsOpenSort(false);
    setBgColor("#fff");
  };

  const handleToggleShowArchived = () => {
    SetToggleCheck(!toggleCheck);
  };

  // toggle modal
  const [showModal, setShowModal] = useState(false);

  // navigate
  const navigate = useNavigate();

  return (
    <div className="projects">
      {/* menu */}
      <div className="menu">
        <label className="menuItem active">
          Projects
          <input type="radio" name="wordkpaceTab" value="projects"></input>
        </label>
        <label
          className="menuItem"
          onClick={() => navigate("/styleguides", { replace: true })}
        >
          Styleguides
          <input type="radio" name="workSpaceTab" value="styleguides"></input>
        </label>
        <hr className="hr" />
      </div>

      {/* filter */}
      <div className="filter">
        {/* sort */}
        <div className="sort" ref={ref}>
          <div
            className="sortSelected"
            style={{ backgroundColor: bgColor }}
            onClick={() => toggleDropdown()}
          >
            <span>{option}</span>
            <svg class="chevron" width="9" height="6" viewBox="0 0 12 8">
              <path
                fill="#554d56"
                d="M6.003 8c.356 0 .71-.148.982-.442l4.608-4.982c.543-.588.543-1.543-.002-2.132-.546-.593-1.425-.59-1.97-.002L6 4.356 2.383.442C1.84-.145.955-.145.413.444c-.55.593-.548 1.544-.004 2.132l4.605 4.982c.27.293.627.44.984.44L6.002 8z"
              ></path>
            </svg>
          </div>
          {isOpenSort && (
            <div className="dropdownOption">
              <div
                className="dropdownItem"
                value="Created"
                onClick={handleSelectOption}
              >
                Sort by Created
                {option === "Created" && (
                  <img
                    class="dropdownCheck"
                    src="https://cdn.zeplin.io/assets/webapp/img/icMenuCheck.svg"
                    alt="check"
                  />
                )}
              </div>
              <div
                className="dropdownItem"
                value="Last updated"
                onClick={handleSelectOption}
              >
                Sort by Last updated
                {option === "Last updated" && (
                  <img
                    class="dropdownCheck"
                    src="https://cdn.zeplin.io/assets/webapp/img/icMenuCheck.svg"
                    alt="check"
                  />
                )}
              </div>
              <div
                className="dropdownItem"
                value="A-Z"
                onClick={handleSelectOption}
              >
                Sort from A-Z
                {option === "A-Z" && (
                  <img
                    class="dropdownCheck"
                    src="https://cdn.zeplin.io/assets/webapp/img/icMenuCheck.svg"
                    alt="check"
                  />
                )}
              </div>
              <div
                className="dropdownItem"
                onClick={handleToggleShowArchived}
                style={{ borderTop: "1px solid #ccc" }}
              >
                Show archived Projects
                {toggleCheck && (
                  <img
                    class="dropdownCheck"
                    src="https://cdn.zeplin.io/assets/webapp/img/icMenuCheck.svg"
                    alt="check"
                  />
                )}
              </div>
            </div>
          )}
        </div>
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
          <input type="search" placeholder="Search for a project" />
        </div>

        {/* create project */}
        <button className="createProjectBtn" onClick={() => setShowModal(true)}>
          Create project
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
            <span>WEB</span>
            <span>1d</span>
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
            <span>WEB</span>
            <span>1 month</span>
          </div>
          <div className="title">Untitled2</div>
          <div className="projectAvatarList">
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
