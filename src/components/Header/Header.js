import React, { useRef, useState } from "react";
import HandleClickOutside from "../HandleClickOutside/HandleClickOutside";
import "./Header.scss";

export default function Header() {
  // handle toggle avatar
  const ref = useRef(null);
  const [isOpenAvatar, setIsOpenAvatar] = useState(false);
  const toggleAvatar = () => {
    setIsOpenAvatar(!isOpenAvatar);
  };
  HandleClickOutside(ref, () => {
    setIsOpenAvatar(false);
  });

  return (
    <header>
      <div className="headerLeft">
        <a href="/">
          <img src="./assests/images/icZeplin.svg" alt="logo" />
        </a>
      </div>
      <div className="headerCenter">Workspace</div>
      <div className="headerRight">
        <a className="bellIcon" href="#">
          <button>
            <svg width="24" height="26">
              <path
                fill="#979197"
                fill-rule="evenodd"
                d="M15.996 20.82l-5.66 2.046a.601.601 0 0 0-.361.769l6.795-2.458a.603.603 0 0 0-.774-.358zm3.77-7.738l-4.387-8.665C13.583.87 9.087-.9 5.335.457 1.58 1.815-.715 6.046.202 9.907l2.243 9.44-.4.145a2.394 2.394 0 0 0-1.44 3.07 2.416 2.416 0 0 0 3.09 1.433l18.119-6.555a2.394 2.394 0 0 0 1.44-3.07 2.416 2.416 0 0 0-3.089-1.433l-.4.145zm-5.157 12.7c-1.876.68-3.951-.282-4.634-2.147l6.795-2.458a3.587 3.587 0 0 1-2.161 4.605z"
              ></path>
            </svg>
          </button>
        </a>
        <div className="avatarFrame" ref={ref} onClick={toggleAvatar}>
          <img
            src="https://i2.wp.com/cdn.zeplin.io/assets/webapp/img/emotars/emotarHamster.png?ssl=1"
            alt="avatar"
          ></img>
        </div>
      </div>

      <div className="breakdown"></div>
      {isOpenAvatar && (
        <div className="profileDetail">
          <div className="profileName">
            <a href="https://app.zeplin.io/profile">
              <div className="avatarFrame">
                <img
                  width="64"
                  height="64"
                  src="https://i2.wp.com/cdn.zeplin.io/assets/webapp/img/emotars/emotarHamster.png?ssl=1"
                  alt="avatar"
                ></img>
              </div>
              <div className="name">
                <span>AnhXuyen</span>
                <span>anhxuyenln@gmail.com</span>
              </div>
            </a>
          </div>
          <hr />

          <div className="free profileItem">
            <div className="icon">
              <img src="https://cdn.zeplin.io/assets/webapp/img/icPlan.svg"></img>
            </div>
            <span>Free</span>
            <button className="updateBtn" type="button">
              Update plan
            </button>
          </div>

          <div className="desktopNotification profileItem">
            <div className="icon">
              <img src="https://cdn.zeplin.io/assets/webapp/img/icNotification.svg"></img>
            </div>
            <span>Desktop Notifications</span>
            <div className="switch">
              <input type="checkbox" class="preferenceCheckbox" />
              <div class="switchKnob"></div>
            </div>
          </div>

          <div className="emailNotification profileItem">
            <div className="icon"></div>
            <span>Email Notifications</span>
            <div className="switch">
              <input type="checkbox" class="preferenceCheckbox" />
              <div class="switchKnob"></div>
            </div>
          </div>

          <hr />
          <div className="emailNotification profileItem">
            <div className="icon"></div>
            <span>Logout</span>
          </div>
        </div>
      )}
    </header>
  );
}
