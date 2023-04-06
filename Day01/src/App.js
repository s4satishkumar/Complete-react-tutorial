import React from 'react';
// import logo from './logo.svg';
import './App.css';
// 
function App() {

  // const codeTag = React.createElement('code',null,'src/App.js');


  // react code from scratch without using jsx to add text withing p tag
  const paragraphTag = React.createElement('p', { className: 'app-para' }, 'helloworld')

  return paragraphTag;
  //   return (
  //     <div className="App">
  //       <header class="App-header">
  //custom js code inside react
  //         {true ? "react is awesome ":"react is not awesome"}
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  // hello world in react
  //          hello wolrd
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
}

export default App;
