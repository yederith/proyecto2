import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Hello world <span aria-label="emoji" role="img">🔥</span>
      </h1>
     <input type="text" className="new-task"/>
    </div>
  );
}

class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         newTask: "",
      }
   }render() {
      return (
         <div className="container">
            <h1 className="title">
               Hello world
               <span aria-label="emoji" role="img">🔥</span>
            </h1>
            <input type="text" className="new-task"/>
         </div>
      );
   }
}

handleTaskChange = (event) => {
   this.setState({
      newTask: event.target.value,
   })
}

export default App;
