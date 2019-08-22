// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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
// }

// export default App;

import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
import LandingPage from './components/LandingPage';
import Contact from "./components/Contact"
import LoggedView from './components/LoggedView';



// const Form = () => (
//   <div>Form</div>
// )


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/LoggedView" component={LoggedView} />
       
      </Switch>
      <Contact />
    </Router>
  )
}

export default App;
