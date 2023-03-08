import React from "react";
import Link from "next/link";

const Expertise = () => {
  return (
    <div className="py-20">
      <div className="bg-section rounded-2xl">
        <div>
          <h3 className=" md:rounded-2xl pt-10 text-3xl font-bold text-white text-center">
            Qualifications
          </h3>
        </div>
        <div className="lg:flex sm:flex md:flex gap-10 p-10">
          <div className="text-center shadow-lg p-10 rounded-xl mt-10 bg-white flex-1">
            <h3 className="text-xl font-bold  pb-2     ">
              {" "}
              HTML/CSS
              <div className="flex justify-center pt-3">
                <svg
                  className="w-12 h-15 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                >
                  <g id="CSS3">
                    <path d="M32.34,6,30.1,31.2,20,34,9.9,31.2,7.66,6ZM13.22,22l.43,4.86L20,28.65h0l6.33-1.75,1.4-15.75H12.25l.28,3.09H24.34l-.28,3.17H12.81l.27,3.09H23.8l-.36,4L20,25.44h0l-3.45-.93L16.32,22Z" />
                  </g>
                </svg>
                <svg
                  className="h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56.693 56.693"
                >
                  <g>
                    <polygon
                      enableBackground="new    "
                      points="16.356,9.799 18.382,9.799 18.382,12.018 20.598,12.018 20.598,5.391 18.382,5.391    18.382,7.581 16.356,7.581 16.356,5.391 14.141,5.391 14.141,12.018 16.356,12.018  "
                    />
                    <polygon
                      enableBackground="new    "
                      points="23.51,12.018 25.725,12.018 25.725,7.59 27.674,7.59 27.674,5.391 21.561,5.391    21.561,7.59 23.51,7.59  "
                    />
                    <polygon
                      enableBackground="new    "
                      points="30.812,8.735 32.338,11.09 32.375,11.09 33.898,8.735 33.898,12.018 36.105,12.018    36.105,5.391 33.795,5.391 32.375,7.723 30.955,5.391 28.646,5.391 28.646,12.018 30.812,12.018  "
                    />
                    <polygon
                      enableBackground="new    "
                      points="42.537,9.829 39.422,9.829 39.422,5.391 37.207,5.391 37.207,12.018 42.537,12.018     "
                    />
                    <path
                      d="M10.949,14.926l3.168,35.532l14.221,3.947L42.57,50.46l3.174-35.534H10.949z M38.871,26.546   H28.346h-6.152l0.398,4.463h5.754h10.129l-1.195,13.383l-8.934,2.475l-0.006,0.002l-8.928-2.477l-0.623-7h4.374l0.324,3.631   l4.854,1.312l0.006-0.002l0,0l4.859-1.312l0.506-5.652h-5.365l0,0h-9.739L17.431,22.19h10.915H39.26L38.871,26.546z"
                      enableBackground="new    "
                    />
                  </g>
                </svg>
              </div>
            </h3>
            <h3 className="text-xl font-bold  pb-2     ">
              {" "}
              Python
              <div className="flex justify-center pt-3">
                <svg
                  className="h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  viewBox="0 0 32 32"
                  version="1.1"
                >
                  <title>python</title>
                  <path d="M19.212 26.447l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.412 0.412 0.287 0.512 0.1 0.512-0.1 0.412-0.287 0.287-0.412 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.287-0.512-0.1-0.512 0.1zM27.297 8.64l0.35 0.075 0.4 0.15 0.437 0.225 0.45 0.337 0.45 0.437 0.437 0.587 0.4 0.737 0.35 0.912 0.262 1.1 0.175 1.3 0.062 1.537-0.075 1.537-0.2 1.3-0.3 1.075-0.4 0.887-0.45 0.712-0.5 0.562-0.525 0.412-0.525 0.3-0.5 0.2-0.45 0.112-0.4 0.062-0.3 0.025-0.2-0.012h-10.272v1.025h7.298l0.012 3.449 0.025 0.45-0.062 0.425-0.137 0.387-0.212 0.362-0.312 0.312-0.387 0.3-0.475 0.25-0.55 0.212-0.637 0.187-0.725 0.162-0.8 0.112-0.887 0.087-0.962 0.050-1.050 0.012-1.587-0.050-1.337-0.175-1.125-0.25-0.912-0.312-0.737-0.375-0.562-0.412-0.425-0.425-0.312-0.425-0.2-0.412-0.125-0.375-0.050-0.312-0.025-0.25 0.012-0.162v-6.673l0.063-0.8 0.162-0.675 0.262-0.575 0.325-0.475 0.375-0.4 0.412-0.3 0.437-0.25 0.437-0.175 0.412-0.125 0.375-0.075 0.325-0.050 0.262-0.025 0.162-0.012h7.298l0.862-0.062 0.737-0.175 0.625-0.262 0.512-0.35 0.412-0.4 0.337-0.437 0.25-0.45 0.187-0.45 0.125-0.437 0.087-0.4 0.050-0.35 0.025-0.262v-3.824h2.612l0.175 0.012zM10.939 3.704l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.425 0.412 0.275 0.512 0.112 0.512-0.113 0.412-0.275 0.287-0.425 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.275-0.512-0.112-0.512 0.112zM18.812 1.229l1.125 0.25 0.912 0.325 0.737 0.375 0.562 0.4 0.425 0.425 0.312 0.425 0.2 0.412 0.125 0.375 0.050 0.325 0.025 0.25-0.012 0.162v6.673l-0.062 0.787-0.162 0.687-0.262 0.575-0.325 0.475-0.375 0.387-0.412 0.312-0.437 0.237-0.437 0.175-0.412 0.125-0.375 0.087-0.325 0.050-0.263 0.025h-7.46l-0.862 0.062-0.737 0.175-0.625 0.275-0.512 0.337-0.412 0.4-0.337 0.437-0.25 0.45-0.187 0.462-0.125 0.437-0.087 0.4-0.050 0.337-0.025 0.262v3.824h-2.787l-0.262-0.037-0.35-0.087-0.4-0.15-0.437-0.225-0.45-0.325-0.45-0.45-0.437-0.575-0.4-0.737-0.35-0.912-0.262-1.1-0.175-1.312-0.062-1.537 0.075-1.524 0.2-1.3 0.3-1.087 0.4-0.887 0.45-0.712 0.5-0.55 0.525-0.412 0.525-0.3 0.5-0.2 0.45-0.125 0.4-0.062 0.3-0.012h0.2l0.075 0.012h10.197v-1.037h-7.298l-0.012-3.436-0.025-0.462 0.062-0.425 0.137-0.387 0.212-0.35 0.312-0.325 0.387-0.287 0.475-0.25 0.55-0.225 0.637-0.187 0.725-0.15 0.8-0.125 0.887-0.075 0.962-0.050 1.050-0.025 1.587 0.063z" />
                </svg>
              </div>
            </h3>
            <h3 className="text-xl font-bold  pb-2     ">
              {" "}
              JavaScript
              <div className="flex justify-center pt-3">
                <svg
                  className="h-12 w-12"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z" />
                </svg>
              </div>
            </h3>
            <h3 className="text-xl font-bold  pb-2     ">
              {" "}
              React.js
              <div className="flex justify-center pt-3">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M14.448 16.24a21.877 21.877 0 0 1-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884.864-.498.983-2.225.414-4.484-.853.19-1.78.334-2.757.425zm-1.31.087a27.512 27.512 0 0 1-2.276 0c.377.492.758.948 1.138 1.364.38-.416.76-.872 1.138-1.364zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.441 4.832-.886 5.598-1.328.767-3.298-.105-5.292-2.03-1.994 1.925-3.964 2.797-5.292 2.03-1.327-.766-1.557-2.908-.886-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.441-4.832.886-5.598 1.328-.767 3.298.105 5.292 2.03 1.994-1.925 3.964-2.797 5.292-2.03 1.327.766 1.557 2.908.886 5.598zm-.973-.248c.57-2.26.45-3.986-.413-4.484-.863-.499-2.419.261-4.09 1.884.591.643 1.179 1.374 1.746 2.175.978.09 1.904.234 2.757.425zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484.863.499 2.419-.261 4.09-1.884a21.877 21.877 0 0 1-1.746-2.175 21.877 21.877 0 0 1-2.757-.425zm4.067-8.142a27.512 27.512 0 0 1 2.276 0A20.523 20.523 0 0 0 12 6.31c-.38.416-.76.872-1.138 1.364zm-1.31.087A21.877 21.877 0 0 1 11.3 5.585C9.627 3.962 8.07 3.202 7.209 3.701c-.864.498-.983 2.225-.414 4.484.853-.19 1.78-.334 2.757-.425zm4.342 7.52A25.368 25.368 0 0 0 15.787 12a25.368 25.368 0 0 0-1.893-3.28 25.368 25.368 0 0 0-3.788 0A25.368 25.368 0 0 0 8.213 12a25.368 25.368 0 0 0 1.893 3.28 25.368 25.368 0 0 0 3.788 0zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.523 20.523 0 0 0-.612-1.667 27.512 27.512 0 0 1-1.138 1.97zM8.822 8.85c-.615.08-1.2.183-1.75.304.17.536.374 1.094.612 1.667a27.512 27.512 0 0 1 1.138-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.304a27.512 27.512 0 0 1-1.138-1.97c-.238.572-.442 1.13-.612 1.666zm-.978-.245c.261-.834.6-1.708 1.01-2.6-.41-.892-.749-1.766-1.01-2.6-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6zm10.834-5.445c-.55-.121-1.135-.223-1.75-.304a27.511 27.511 0 0 1 1.138 1.97c.238-.572.442-1.13.612-1.666zm.978.245c-.261.834-.6 1.708-1.01 2.6.41.892.749 1.766 1.01 2.6 2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6zM12 13.88a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76z"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </div>
            </h3>
            <h3 className="text-xl font-bold  pb-2     ">
              {" "}
              Next.js
              <div className="flex justify-center pt-3">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_950_641)">
                    <path
                      d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_950_641">
                      <rect fill="white" height="24" width="24" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </h3>

            <h3 className="text-xl font-bold pb-2     ">
              {" "}
              Tailwind
              <div className="flex justify-center pt-3">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M7.5 3C5.63333 3 4.46667 4 4 5.99999C4.7 4.99999 5.51667 4.625 6.45 4.87499C6.98252 5.01763 7.36314 5.43155 7.78443 5.88974C8.47074 6.63613 9.26506 7.49999 11 7.49999C12.8667 7.49999 14.0333 6.49999 14.5 4.5C13.8 5.49999 12.9833 5.87499 12.05 5.62499C11.5175 5.48235 11.1369 5.06844 10.7156 4.61025C10.0293 3.86386 9.23494 3 7.5 3ZM4 7.49999C2.13333 7.49999 0.966667 8.49998 0.5 10.5C1.2 9.49998 2.01667 9.12498 2.95 9.37498C3.48252 9.51762 3.86314 9.93154 4.28443 10.3897C4.97074 11.1361 5.76506 12 7.5 12C9.36667 12 10.5333 11 11 8.99998C10.3 9.99998 9.48333 10.375 8.55 10.125C8.01748 9.98234 7.63686 9.56843 7.21557 9.11023C6.52926 8.36385 5.73494 7.49999 4 7.49999Z"
                    fillRule="evenodd"
                    stroke="black"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </h3>
            <h3 className="text-xl font-bold  pb-2     ">
              {" "}
              Bootstrap
              <div className="flex justify-center pt-3">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z" />
                </svg>
              </div>
            </h3>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl mt-10 bg-white flex-1">
            <h3 className="text-xl font-bold  pb-2     ">
              {" "}
              Figma
              <div className="flex justify-center pt-3">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                </svg>
              </div>
            </h3>{" "}
            <h3 className="text-xl font-bold  pb-2     ">
              {" "}
              Adobe XD
              <div className="flex justify-center pt-3">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 512 512"
                >
                  <g id="_x33__x2C__XD_x2C__Adobe">
                    <g>
                      <path d="M0,0v512h512V0H0z M489.471,489.475H22.525V22.529h466.945V489.475z" />
                      <g>
                        <path d="M265.795,137.064h-39.996l-42.932,89.794l-43.508-89.794H98.158l58.308,116.594L96.077,373.047h40.713l43.702-91.496     l44.209,91.496h44.067l-62.243-120.791L265.795,137.064z M376.358,137.064v60.004c0,0-6.918,0-11.525,0     c-39.329,0-86.875,25.363-86.875,90.145c0,50.081,25.375,87.723,79.422,87.723c39.796,0,58.544-13.766,58.544-13.766V137.064     H376.358z M376.32,340.466c0,0-4.555,2.005-15.304,2.005c-10.747,0-43.722-4.736-43.722-57.022c0-52.282,37.894-56.474,47-56.474     c9.111,0,12.025,2.552,12.025,2.552V340.466z" />
                      </g>
                    </g>
                  </g>
                  <g id="Layer_1" />
                </svg>{" "}
              </div>
            </h3>
            <h3 className="text-xl font-bold  pb-2     ">
              {" "}
              Adobe Photoshop
              <div className="flex justify-center pt-3">
                <svg
                  className="h-12 w-12"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <g id="Photoshop">
                    <path d="M14.28,11c-1.62,0-3.16,0-4.21.08-.13,0-.36.08-.36.2V28.8c0,.15.07.2.2.2H12.4c.15,0,.2-.07.2-.2V22.54c.44,0,.65,0,1.27,0,3.69,0,6.69-1.78,6.69-5.92C20.56,13.48,18.8,11,14.28,11Zm-.34,9a11.61,11.61,0,0,1-1.32,0V13.64c.29,0,.91-.05,1.56-.05,2.17,0,3.46,1.05,3.46,3.12C17.64,19.3,15.84,20,13.94,20Zm16.38,5.28c0,2.61-2,4-4.7,4a7.12,7.12,0,0,1-3.35-.7c-.11-.05-.13-.13-.13-.26V25.9c0-.16.08-.21.2-.13a6.08,6.08,0,0,0,3.28,1c1.3,0,1.84-.54,1.84-1.28s-.38-1.11-2-2c-2.32-1.11-3.29-2.24-3.29-4.12,0-2.11,1.65-3.86,4.51-3.86a7.42,7.42,0,0,1,2.93.46.35.35,0,0,1,.16.32v2.24c0,.14-.08.22-.24.17A5.5,5.5,0,0,0,26.65,18c-1.29,0-1.73.66-1.73,1.2s.3,1,2,1.89C29.52,22.31,30.32,23.5,30.32,25.25Z" />
                  </g>
                </svg>
              </div>
            </h3>
            <h3 className="text-xl font-bold  pb-2     ">
              {" "}
              Adobe Illustrator
              <div className="flex justify-center pt-3">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <g id="Illustrator">
                    <path d="M13.74,23.92l-1.29,4.92c0,.13-.08.16-.25.16H9.8c-.17,0-.2-.05-.17-.25l4.65-16.27a5.65,5.65,0,0,0,.17-1.36c0-.11,0-.16.13-.16H18c.12,0,.17,0,.2.16l5.21,17.67c0,.13,0,.21-.13.21H20.57c-.13,0-.21,0-.25-.15L19,23.92Zm4.55-2.65c-.46-1.81-1.54-5.78-1.95-7.69h0c-.34,1.91-1.21,5.15-1.9,7.69Zm7.37-9.1a1.67,1.67,0,0,1,3.34,0,1.56,1.56,0,0,1-1.7,1.67,1.54,1.54,0,0,1-1.64-1.67Zm.2,3.72c0-.13.05-.2.19-.2h2.57c.13,0,.2.05.2.2V28.8c0,.13,0,.2-.2.2H26.09c-.17,0-.22-.08-.22-.21V15.89Z" />
                  </g>
                </svg>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;