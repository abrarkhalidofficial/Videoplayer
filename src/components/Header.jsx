import React from "react";
import profile from "../assets/profile.png";

export default function Header() {
  return (
    <>
      <div className="videocard__navbar">
        <div className="videocard__logo">LOGO</div>
        <div className="videocard__bar">
          <div className="videocard__bar__search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
            >
              <g id="magnifying-glass" transform="translate(-0.25 -0.065)">
                <g
                  id="Rectangle_147900"
                  data-name="Rectangle 147900"
                  transform="translate(0.25 0.065)"
                  fill="#ebebeb"
                  stroke="#707070"
                  stroke-width="1"
                  opacity="0"
                >
                  <rect width="31" height="31" stroke="none" />
                  <rect x="0.5" y="0.5" width="30" height="30" fill="none" />
                </g>
                <g
                  id="Group_12"
                  data-name="Group 12"
                  transform="translate(4.786 4.453)"
                >
                  <path
                    id="Path_88"
                    data-name="Path 88"
                    d="M21.615,20.2,15.869,14.45A8.653,8.653,0,0,0,17.8,8.919a8.936,8.936,0,1,0-3.387,6.987l5.746,5.746a1.185,1.185,0,0,0,.768.3,1.029,1.029,0,0,0,.728-.3A1,1,0,0,0,21.615,20.2ZM2.058,8.919a6.861,6.861,0,1,1,6.861,6.861A6.869,6.869,0,0,1,2.058,8.919Z"
                    fill="#ebebeb"
                  />
                </g>
                <path
                  id="Highlight"
                  d="M3.685,0h.76l.015,0H4.5l.015,0H4.57l.008,0h.007l.015,0h.014l.008,0h.007l.008,0h.014l.008,0h.014l.008,0h.007l.007,0,.007,0h.007l.008,0,.007,0,.015,0,.007,0,.007,0h0l.008,0,.007,0,.007,0,.007,0,.007,0L4.8.13l.007,0,.015,0,.007,0,.007,0,.008,0,.007,0,.008,0,.007,0,.006,0,.008,0,.007,0,.014,0,.007,0,.014,0,.007,0,.008,0,.007,0,.014,0,.007,0,.015,0,.007,0,.007,0L5,.182,5,.184l.008,0,.007,0,.014,0,.007,0,.014,0,.007,0,.007,0,.007,0,.014,0,.007,0,.014,0,.006,0,.013,0,.007,0,.007,0,.007,0h0l.013,0,.007,0h0l.013,0,.007,0h0l.013,0,.007,0,.007,0,.007,0h0l.013,0,.007,0h0l.013,0,.007,0,.007,0,.007,0h0l.013,0,.007,0h0l.013,0,.007,0,.007,0h0l.007,0,.006,0,.007,0L5.36.3l.013,0,.007,0h0l.013.005h0l.02.008h0l.013.005h0l.007,0,.013.005.007,0h0l.013.005h0l.02.008h0L5.51.36h0l.013.005.007,0h0l.013.006h0l.02.008h0l.013.006h0l.007,0L5.6.4h0l.02.009h0l.04.018h0L5.67.429h0l.092.043h0A4.812,4.812,0,0,1,8.047,2.805.685.685,0,0,1,6.8,3.372a3.435,3.435,0,0,0-3.116-2A.685.685,0,0,1,3.685,0Z"
                  transform="translate(10.017 8.06)"
                  fill="#ebebeb"
                />
              </g>
            </svg>
          </div>
          <div className="videocard__text">
            Search videos, livestreams, users...
          </div>
          <div className="videocard__icon">
            <svg
              id="Settings"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="18"
              viewBox="0 0 17 18"
            >
              <path
                id="Line_541"
                data-name="Line 541"
                d="M15,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H15a1,1,0,0,1,1,1A1,1,0,0,1,15,1Z"
                transform="translate(1 3)"
                fill="#fff"
              />
              <path
                id="Line_542"
                data-name="Line 542"
                d="M15,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H15a1,1,0,0,1,1,1A1,1,0,0,1,15,1Z"
                transform="translate(1 9.186)"
                fill="#fff"
              />
              <path
                id="Line_543"
                data-name="Line 543"
                d="M15,1H0A1,1,0,0,1-1,0,1,1,0,0,1,0-1H15a1,1,0,0,1,1,1A1,1,0,0,1,15,1Z"
                transform="translate(1 15)"
                fill="#fff"
              />
              <circle
                id="Ellipse_64"
                data-name="Ellipse 64"
                cx="3"
                cy="3"
                r="3"
                transform="translate(8)"
                fill="#fff"
              />
              <circle
                id="Ellipse_65"
                data-name="Ellipse 65"
                cx="3"
                cy="3"
                r="3"
                transform="translate(2 6)"
                fill="#fff"
              />
              <circle
                id="Ellipse_66"
                data-name="Ellipse 66"
                cx="3"
                cy="3"
                r="3"
                transform="translate(8 12)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
        <div className="videocard__button__nd__profile">
          <div className="videocard__navbar__button">
            <button>
              {" "}
              <div className="videocard__navbar__button__svg">
                <svg
                  id="Group_67843"
                  data-name="Group 67843"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18.001"
                  viewBox="0 0 17 18.001"
                >
                  <path
                    id="Path_35782"
                    data-name="Path 35782"
                    d="M16.312,3.43a21.788,21.788,0,0,0-8.624,0,4.877,4.877,0,0,0-3.71,3.532l-.043.154a12.388,12.388,0,0,0,0,6.508l.042.154a4.879,4.879,0,0,0,3.711,3.53,21.63,21.63,0,0,0,3.625.42v1.855h-1.6a.709.709,0,0,0,0,1.417h4.578a.709.709,0,0,0,0-1.417h-1.6V17.729a21.794,21.794,0,0,0,3.625-.42,4.878,4.878,0,0,0,3.71-3.531l.043-.154a12.388,12.388,0,0,0,0-6.508l-.042-.154a4.877,4.877,0,0,0-3.711-3.531ZM14.047,11.5l.023-.021,1.5-1.4a.58.58,0,0,0,.04-.8.537.537,0,0,0-.775-.042l-1.5,1.395q-.153.146-.314.282-.123-.174-.236-.354l-.656-1.016-.017-.026a4.85,4.85,0,0,0-.364-.516.987.987,0,0,0-.625-.367.976.976,0,0,0-.694.2,4.658,4.658,0,0,0-.476.407l-.023.021-1.5,1.395a.58.58,0,0,0-.041.8.537.537,0,0,0,.775.043l1.5-1.4c.147-.137.242-.224.314-.282.055.074.126.183.236.353l.656,1.017.017.026a4.821,4.821,0,0,0,.364.515.992.992,0,0,0,.625.368.976.976,0,0,0,.694-.2,4.925,4.925,0,0,0,.476-.407Z"
                    transform="translate(-3.5 -2.999)"
                    fill="#fff"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
              Upload
            </button>
          </div>
          <div className="videocard__navbar__profile">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
      <div className="playervideo___and__chat">
        <div class="playervideo">
          <video controls>
            <source src="video/sintel-short.mp4" type="video/mp4" />
            <source src="video/sintel-short.webm" type="video/webm" />
          </video>
        </div>
        <div className="playvideo__chat">
          <div className="playvideo__chat__bar">
            <div className="playvideo__chat__bar___openicon">X</div>

            <div className="playvideo__chat__bar__title">Chat</div>
            <div className="playvideo__chat__bar__icon">
              <svg
                id="Two-user"
                xmlns="http://www.w3.org/2000/svg"
                width="19.485"
                height="17.32"
                viewBox="0 0 19.485 17.32"
              >
                <g id="Group_67840" data-name="Group 67840">
                  <path
                    id="Path_35775"
                    data-name="Path 35775"
                    d="M5.308,8.207a4.246,4.246,0,1,1,4.245,4.2,4.226,4.226,0,0,1-4.245-4.2Z"
                    transform="translate(-2.81 -4)"
                    fill="#fff"
                  />
                  <path
                    id="Path_35776"
                    data-name="Path 35776"
                    d="M7.06,13.543l.179-.028a16.055,16.055,0,0,1,5.012,0l.178.028a4.789,4.789,0,0,1,4.06,4.715,2.3,2.3,0,0,1-2.314,2.293H5.315A2.3,2.3,0,0,1,3,18.258,4.789,4.789,0,0,1,7.06,13.543Z"
                    transform="translate(-3 -3.231)"
                    fill="#fff"
                  />
                  <path
                    id="Path_35777"
                    data-name="Path 35777"
                    d="M14.827,4a.742.742,0,1,0,0,1.484,2.722,2.722,0,1,1,0,5.444.742.742,0,1,0,0,1.484,4.206,4.206,0,1,0,0-8.412Z"
                    transform="translate(-2.086 -4)"
                    fill="#fff"
                  />
                  <path
                    id="Path_35778"
                    data-name="Path 35778"
                    d="M15.972,13.492a.742.742,0,1,0,0,1.484h.968a1.633,1.633,0,0,1,.24.018,3.3,3.3,0,0,1,2.8,3.25.812.812,0,0,1-.816.809H17.12a.742.742,0,1,0,0,1.484h2.042a2.3,2.3,0,0,0,2.315-2.293,4.789,4.789,0,0,0-4.06-4.715,3.055,3.055,0,0,0-.476-.037Z"
                    transform="translate(-1.992 -3.217)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
