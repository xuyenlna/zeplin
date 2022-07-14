import React, { useRef, useState } from "react";
import HandleClickOutside from "../HandleClickOutside/HandleClickOutside";
import "./HandyArticles.scss";

export default function HandyArticles() {
  // handle toggle handy article button at bottom of page
  const ref2 = useRef(null);
  const [isOpenHandlyArticles, setIsOpenHandlyArticles] = useState(false);
  const [bgColor2, setBgColor2] = useState("#f7f7f7");
  const toggleHandlyArticles = () => {
    if (isOpenHandlyArticles === false) {
      setBgColor2("#ccc");
      setIsOpenHandlyArticles(true);
    }
    if (isOpenHandlyArticles === true) {
      setBgColor2("#f7f7f7");
      setIsOpenHandlyArticles(false);
    }
  };
  HandleClickOutside(ref2, () => {
    setIsOpenHandlyArticles(false);
    setBgColor2("#f7f7f7");
  });
  return (
    <div
      ref={ref2}
      className="handyArticles"
      style={{ backgroundColor: bgColor2 }}
      onClick={toggleHandlyArticles}
    >
      <img
        width="28"
        height="28"
        src="https://cdn.zeplin.io/assets/webapp/img/icLifeBuoy.svg"
        alt="btn"
      />
      {isOpenHandlyArticles && (
        <div className="handyArticlesContent">
          <h3>Handy Articles:</h3>
          <ul>
            <li>
              <a href="https://support.zeplin.io/en/articles/1988444-adding-a-user-to-a-project">
                <span>Adding a user project</span>
              </a>
            </li>
            <li>
              <a href="https://support.zeplin.io/en/articles/1273189-publishing-designs-from-figma">
                <span>Pushing designs</span>
              </a>
            </li>
            <li>
              <a href="https://support.zeplin.io/en/collections/48616-profile">
                <span>Managing profile</span>
              </a>
            </li>
            <li>
              <a href="https://support.zeplin.io/en/articles/367394-creating-a-project">
                <span>Creating a project</span>
              </a>
            </li>
            <li>
              <a href="https://support.zeplin.io/en/articles/246355-transferring-a-project">
                <span>Transferring a project</span>
              </a>
            </li>
          </ul>
          <hr />
          <button>
            <span>Got another question? ☝️</span>
          </button>
        </div>
      )}
    </div>
  );
}
