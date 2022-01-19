import "./Style.css"
import { NavLink } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobleStyle";
import { lightTheme, darkTheme } from "./Theme"
import { useState, createContext, useEffect } from "react";
import ringer from "./Sound/Notification.mp3";
import after from "./Sound/aftersound.mp3"
import Home from "./Home";

function App() {
  const UserContext = createContext();
  const [theme, setTheme] = useState(true);
  const [tone, setTone] = useState(null)
  const [dot, setDot] = useState(1);
  const [sound, setSound] = useState(false);
  const [bounce, setBounce] = useState(null);
  function ThemeChanger() {
    setTheme(!theme)
  }
  function handleDot(index) {
    setDot(index)
  }
  function handleBounce() {
    setBounce(!bounce)
    setTimeout(() => {
      if (bounce === true) {
        setBounce(true)
      }
    }, 0);
  }

  const audio = new Audio(ringer);
  audio.loop = true
  const afteraudio = new Audio(after);
  afteraudio.loop = true



  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className={theme ? "light" : "dark"}>
        <footer className="footercontainer">
          <div className="container">
            <NavLink exact to="/"><button onClick={() => {
              handleDot(1)
              handleBounce()
            }} className={bounce && dot === 1 ? "button-css-after" : "button-css"}>
              <svg height="24" width="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.25" d="M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z" fill=" hsl(0 0% 52.3%)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z" fill=" hsl(0 0% 52.3%)"></path>
                <path d="M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z" fill=" hsl(0 0% 52.3%)"></path>
              </svg>
              <div className={dot === 1 ? "dot" : null}></div>
            </button>
            </NavLink>
            <NavLink exact to="/projects"><button onClick={() => {
              handleDot(2)
              handleBounce()
            }} className={dot === 2 && bounce ? "button-css-after" : "button-css"}>
              <svg height="24" width="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 20C8 19.4477 8.44772 19 9 19H15C15.5523 19 16 19.4477 16 20V21C16 22.6569 14.6569 24 13 24H11C9.34315 24 8 22.6569 8 21V20Z" fill=" hsl(0 0% 52.3%)"></path>
                <path opacity="0.25" d="M20 8C20 10.5264 18.8289 12.7793 17 14.2454V15C17 16.1046 16.1046 17 15 17C10.8358 17 15.5135 17 9 17C7.89543 17 7 16.1046 7 15V14.2454C5.17107 12.7793 4 10.5264 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8Z" fill=" hsl(0 0% 52.3%)"></path>
                <path d="M10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289C8.90237 8.68342 8.90237 9.31658 9.29289 9.70711L11 11.4142V17H13V11.4142L14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L12 9.58579L10.7071 8.29289Z" fill=" hsl(0 0% 52.3%)"></path>
              </svg>
              <div className={dot === 2 ? "dot" : null}></div>
            </button>
            </NavLink>
            <NavLink exact to="/writting"> <button onClick={() => {
              handleDot(3)
              handleBounce()
            }} className={dot === 3 && bounce ? "button-css-after" : "button-css"}>
              <svg height="24" width="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.69601 15.8112L2.15894 19.91C1.70676 21.1158 2.88429 22.2934 4.09012 21.8412L8.18896 20.3041C8.72361 20.1036 9.20914 19.791 9.6129 19.3872L10 19L5 14L4.6129 14.3872C4.20914 14.791 3.8965 15.2765 3.69601 15.8112Z" fill=" hsl(0 0% 52.3%)"></path>
                <path opacity="0.25" d="M5 14L10 19L19.5 9.5L14.5 4.5L5 14Z" fill=" hsl(0 0% 52.3%)"></path>
                <path d="M20.8787 8.12136L19.5 9.5L14.5 4.5L15.8787 3.12135C17.0503 1.94978 18.9497 1.94978 20.1213 3.12136L20.8787 3.87872C22.0503 5.05029 22.0503 6.94978 20.8787 8.12136Z" fill=" hsl(0 0% 52.3%)"></path>
              </svg>
              <div className={dot === 3 ? "dot" : null}></div>
            </button>
            </NavLink>
            <NavLink exact to="/photos"> <button onClick={() => {
              handleDot(4)
              handleBounce()
            }} className={dot === 4 && bounce ? "button-css-after" : "button-css"}>
              <svg height="24" width="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.25" d="M2 8.34233C2 6.96573 2.93689 5.76578 4.27239 5.4319L6 5L7.1094 3.3359C7.6658 2.5013 8.60249 2 9.60555 2H14.3944C15.3975 2 16.3342 2.5013 16.8906 3.3359L18 5L19.7276 5.4319C21.0631 5.76578 22 6.96573 22 8.34233V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V8.34233Z" fill="hsl(0 0% 52.3%)"></path>
                <path d="M18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10Z" fill="hsl(0 0% 52.3%)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13Z" fill="hsl(0 0% 52.3%)"></path>
              </svg>
              <div className={dot === 4 ? "dot" : null}></div>
            </button>
            </NavLink>
            <NavLink exact to="/words"> <button onClick={() => {
              handleDot(5)
              handleBounce()
            }} className={dot === 5 && bounce ? "button-css-after" : "button-css"}>
              <svg height="24" width="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.25" d="M3 4C3 2.34315 4.34315 1 6 1H15.7574C16.553 1 17.3161 1.31607 17.8787 1.87868L20.1213 4.12132C20.6839 4.68393 21 5.44699 21 6.24264V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4Z" fill="hsl(0 0% 52.3%)"></path>
                <path d="M15 1.89181C15 1.39927 15.3993 1 15.8918 1V1C16.6014 1 17.2819 1.28187 17.7836 1.78361L20.2164 4.21639C20.7181 4.71813 21 5.39863 21 6.10819V6.10819C21 6.60073 20.6007 7 20.1082 7H16C15.4477 7 15 6.55228 15 6V1.89181Z" fill="v"></path>
                <path d="M9 12C8.44771 12 8 12.4477 8 13C8 13.5523 8.44771 14 9 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H9Z" fill="hsl(0 0% 52.3%)"></path>
                <path d="M9 16C8.44771 16 8 16.4477 8 17C8 17.5523 8.44771 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9Z" fill="hsl(0 0% 52.3%)"></path>
              </svg>
              <div className={dot === 5 ? "dot" : null}></div>
            </button>
            </NavLink>
            <hr className="c-lesPJm-iebPHZ-css" />
            <a href="https://twitter.com/raunofreiberg" target="_blank"> <button className="button-css">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.25" d="M20.9999 7.5C21.4999 15 15.9999 21 8.99995 21C6.58804 21 4.17613 20.6768 2.28388 19.7706C1.85051 19.5631 2.0199 18.985 2.49936 18.9532C4.82944 18.7987 6.75765 18.2423 7.99995 17C11.0001 14 11.5 13 12.2646 9.02396C12.0933 8.54804 11.9999 8.03492 11.9999 7.5C11.9999 5.01472 14.0147 3 16.4999 3C18.0181 3 19.3607 3.75182 20.1757 4.90346L21.8929 4.65815C22.3207 4.59703 22.6194 5.07087 22.3796 5.43047L20.9999 7.5Z" fill="hsl(0 0% 52.3%)"></path>
                <path d="M7.99998 16.9999C2.58358 15.1944 1.64928 8.49939 2.62226 5.00708C2.73651 4.59701 3.26964 4.59488 3.48453 4.96234C5.14601 7.80359 8.30518 9.38991 12.2646 9.02385C18.5 9.02385 17 19.9999 7.99998 16.9999Z" fill="hsl(0 0% 52.3%)"></path>
              </svg>
            </button>
            </a>
            <a href="https://twitter.com/raunofreiberg" target="_blank"> <button className="button-css">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
              </svg></button></a>
            <a href="https://twitter.com/raunofreiberg" target="_blank"> <button className="button-css">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.25" d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6Z" fill="hsl(0 0% 52.3%)"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.23177 7.35981C5.58534 6.93553 6.2159 6.87821 6.64018 7.23177L11.3598 11.1648C11.7307 11.4738 12.2693 11.4738 12.6402 11.1648L17.3598 7.23177C17.7841 6.87821 18.4147 6.93553 18.7682 7.35981C19.1218 7.78409 19.0645 8.41465 18.6402 8.76822L13.9205 12.7012C12.808 13.6284 11.192 13.6284 10.0794 12.7012L5.35981 8.76822C4.93553 8.41465 4.87821 7.78409 5.23177 7.35981Z" fill="hsl(0 0% 52.3%)"></path>
              </svg>
            </button>
            </a>
            <hr className="c-lesPJm-iebPHZ-css" />
            <button onClick={() => {
              handleDot(7)
              ThemeChanger()
              handleBounce()
            }} className={bounce && dot === 7 ? "button-css-after" : "button-css"}>
              <svg className={theme ? "svgtheme" : "themechanges"} viewBox="0 0 24 24" fill="none" >
                <mask id="myMask2">
                  <rect></rect>
                  <circle fill={theme ? "black" : "black"} cx={theme ? "100%" : "50%"} r={theme ? "5" : "9"} cy={theme ? "0%" : "23%"}></circle>
                </mask>
                <circle cx="12" cy="12" fill="var(--colors-gray10)" mask="url(#myMask2)" r={theme ? "5" : "9"}></circle>
                <g stroke="currentColor" className={theme ? "opa" : "sopa"}>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </g>
              </svg>
              {/* <svg className="themechanges" viewBox="0 0 24 24" color="var(--colors-gray10)" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" style="transform: rotate(40deg) translateZ(0px); transform-origin: 12px 12px;">
              <mask id="myMask2">
                <circle r="9" fill="black" cx="50%" cy="23%"></circle>
              </mask>
              <circle cx="12" cy="12" fill="var(--colors-gray10)" mask="url(#myMask2)" r="9"></circle>
              <g stroke="currentColor" opacity="0">
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></g>
            </svg> */}
            </button>
            <button className="button-css" onClick={() => {
              audio.loop = true;
              audio.play();
              (audio.loop = false)

              handleDot(8)
              setSound(!sound)
              handleBounce()
            }} className={bounce && dot === 8 ? "button-css-after" : "button-css"}>

              <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
                <path d="M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z" fill="currentColor" className={sound ? "sound-before-a" : "sound-after-a"}></path>
                <path d=" M14.3025 3.69751 C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001 C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025 " className={sound ? "sound-before-b" : "sound-after-b"}></path>
                <path d=" M11.655 6.34501 C12.358 7.04824 12.753 8.00189 12.753 8.99626 C12.753 9.99063 12.358 10.9443 11.655 11.6475 " className={sound ? "sound-before-c" : "sound-after-c"}></path>
              </svg>

            </button>
          </div>
        </footer >
      </div >
    </ThemeProvider>

  );
}

export default App;

