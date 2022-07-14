import React, { useRef } from "react";
import HandleClickOutside from "../HandleClickOutside/HandleClickOutside";
import "./Modal.scss";

export default function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div id="myProjectModal" className="myModal" onClick={props.onClose}>
      <div className="myModal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="myModal-content">
          <h1>More projects, more opportunities 🍧</h1>
          <div className="planDesc">
            <p>
              You are currently on the <strong>Free</strong> plan️ where you can
              have up to 1 project. Upgrade below to create as many as you need.
            </p>
          </div>
          <div className="planList">
            <div className="planItem">
              <div className="planContent">
                <img
                  src="https://cdn.zeplin.io/assets/webapp/img/icTeamPlan.png"
                  srcset="https://cdn.zeplin.io/assets/webapp/img/icTeamPlan@2x.png 2x, https://cdn.zeplin.io/assets/webapp/img/icTeamPlan@3x.png 3x"
                  class="planLogo"
                  alt="img"
                />
                <h2>Team</h2>
                <p class="description">Best for small teams</p>
                <p className="priceText">
                  <span className="monthlyUnitPrice">$6</span>
                  <span className="seatText">seat*/mo</span>
                </p>
                <ul>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>{" "}
                    </svg>
                    12 Projects
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>{" "}
                    </svg>
                    Flows (up to 6 projects)
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>
                    </svg>
                    Team Workspace
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>
                    </svg>
                    User Management
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>
                    </svg>
                    Unlimited Reviewers
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>
                    </svg>
                    Unlimited Version History
                  </li>
                </ul>
              </div>
            </div>

            <div className="planItem">
              <div className="planContent">
                <img
                  src="https://cdn.zeplin.io/assets/webapp/img/icOrganizationPlan.png"
                  srcset="https://cdn.zeplin.io/assets/webapp/img/icOrganizationPlan@2x.png 2x, https://cdn.zeplin.io/assets/webapp/img/icOrganizationPlan@3x.png 3x"
                  class="planLogo"
                  alt="img"
                />
                <h2>Organisation</h2>
                <p class="description">Best for medium size teams</p>
                <p className="priceText">
                  <span className="monthlyUnitPrice">$12</span>
                  <span className="seatText">seat*/mo</span>
                  <span className="minUserCount">12 seat minimum</span>
                </p>
                <h4>Everything in Team, plus;</h4>
                <ul>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>{" "}
                    </svg>
                    Unlimited Projects
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>{" "}
                    </svg>
                    Flows (up to 12 projects)
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>
                    </svg>
                    Advanced User Permissions
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>
                    </svg>
                    Jira Server and Data Center Integration
                  </li>
                </ul>
              </div>
            </div>

            <div className="planItem">
              <div className="planContent">
                <img
                  src="https://cdn.zeplin.io/assets/webapp/img/icEnterprisePlan.png"
                  srcset="https://cdn.zeplin.io/assets/webapp/img/icEnterprisePlan@2x.png 2x, https://cdn.zeplin.io/assets/webapp/img/icEnterprisePlan@3x.png 3x"
                  class="planLogo"
                  alt="img"
                />
                <h2>Enterprise</h2>
                <p class="description">Best for large teams</p>
                <p className="priceText">
                  <img
                    src="https://cdn.zeplin.io/assets/webapp/img/icTalk.svg"
                    alt="img"
                  />
                  <span className="minUserCount">Custom Pricing</span>
                </p>
                <h4>Everything in Organization, plus;</h4>
                <ul>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>{" "}
                    </svg>
                    Flows (unlimited)
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>{" "}
                    </svg>
                    Flows Boards
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>
                    </svg>
                    Single Sign on (SSO)
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>
                    </svg>
                    SCIM
                  </li>
                  <li>
                    <svg width="14" height="10" viewBox="0 0 14 10">
                      <path
                        fill="#979197"
                        fill-rule="evenodd"
                        d="M5 10 0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z"
                      ></path>
                    </svg>
                    Invoiced Billing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
