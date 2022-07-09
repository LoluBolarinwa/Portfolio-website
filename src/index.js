import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

 
// :root {
//   font-size: 16px;
// }

// /* .App{
  
// } */

// body {
//   margin: 0;
//   padding: 0;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// body::-webkit-scrollbar{
//    width: 0.25rem;
// }
// /* body::-webkit-scrollbar-track{
  
// } */
// body::-webkit-scrollbar-track{
//   background: white;
// }

// body::-webkit-scrollbar-button{
//   background:salmon
// }

// body::-webkit-scrollbar-thumb{
//   background: #00353be6;
// }
// /* code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     monospace;
// } */

// .section-1{
//   /* background-image: linear-gradient(to right, #092c42 , #032134); */
//   /* background-image: linear-gradient(to right, #0a2b50 , #01172f); */
//   /* background: rgb(13,69,102); //linear
// background: linear-gradient(90deg, rgba(13,69,102,1) 0%, rgba(8,32,48,1) 70%); */

// /* background: rgb(13,69,102);  radial */
// /* background: radial-gradient(circle, rgba(13,69,102,1) 0%, rgba(8,32,48,1) 100%); */

// background: rgb(13,69,102);
// background: radial-gradient(circle, rgba(13,69,102,1) 27%, rgba(6,31,47,1) 100%);

//   /* background-color: #032b43; */
//   font-size: 4rem;
//   /* height: 35rem; */
//   height: 180vh;
//   width: 100%;
//   margin-top: 0;
//   padding-top: 0;
// }

// .main{
//   margin-left: 5rem;
//   padding: 1rem;
// }

// .navbar{
//   background: #020018e6;
//   /* font-size: 1.8rem; */
//   height: 5rem;
//   margin: 0;
//   padding: 0;
// }

// .navbar-list{

// }

// .section-2{
//   background-color: rgb(25, 25, 25);
//   /* height: 35rem; */
//   height: 180vh;
//   width: 100%;
//   margin-top: 0;
//   padding-top: 0;
// }


// name{
//   font-size: 5rem;
//   text-transform: uppercase;
//   font-weight: 900;
//   line-height: 0.9;
//   margin: 0;
// }

// h1{
//   margin: 0;
//   padding: 0;














{/* <div class="header__socials">
    <a rel="noreferrer" href="https://twitter.com/TulshyanDevesh" target="_blank">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            ></path>
        </svg>
    </a>
    <a rel="noreferrer" href="https://www.linkedin.com/in/devesh-tulshyan-b674421a2/" target="_blank">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            ></path>
        </svg>
    </a>
    <a rel="noreferrer" href="https://github.com/Devesh225" target="_blank">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
        </svg>
    </a>
</div> */}
