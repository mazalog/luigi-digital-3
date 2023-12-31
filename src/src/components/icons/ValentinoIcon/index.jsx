import * as React from "react"

function ValentinoIco(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.w}
            height={props.h}
            fill={props.f}
            viewBox="0 0 192.756 192.756"
            {...props}
        >
            <g fillRule="evenodd" clipRule="evenodd">
                <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                <path d="M56.821 47.954h4.123l32.62 97.437H56.821c-27.614 0-50.224-21.889-50.224-48.619v-.197c0-26.764 22.61-48.621 50.224-48.621zm22.216 0H89.54V43.93H55.185c-28.793 0-52.351 23.558-52.351 52.317v.263c0 28.793 23.558 52.316 52.351 52.316h82.418c28.793 0 52.318-23.523 52.318-52.316v-.263c0-28.76-23.525-52.317-52.318-52.317h-15.346v4.024h9.85l-29.152 73.159-23.918-73.159zm55.949 0h.949c27.646 0 50.256 21.856 50.256 48.62v.197c0 26.73-22.609 48.619-50.256 48.619H96.803l38.183-97.436z" />
            </g>
        </svg>
    )
}

export default ValentinoIco
