import * as React from "react"

const IconAdd = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      // enableBackground: "new 0 0 512 512",
      width: 12,
      height: 12,
      fill: props.color
    }}
    xmlSpace="preserve"
  >
    <switch>
      <g>
        <path
          d="M440 216H304c-4.4 0-8-3.6-8-8V72c0-22.1-17.9-40-40-40s-40 17.9-40 40v136c0 4.4-3.6 8-8 8H72c-22.1 0-40 17.9-40 40s17.9 40 40 40h136c4.4 0 8 3.6 8 8v136c0 22.1 17.9 40 40 40s40-17.9 40-40V304c0-4.4 3.6-8 8-8h136c22.1 0 40-17.9 40-40s-17.9-40-40-40z"
        />
      </g>
    </switch>
  </svg>
)

export default IconAdd
