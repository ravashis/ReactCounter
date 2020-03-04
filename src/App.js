import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FirstComponent,{SecondComponent} from './components/learningExamples/FirstComponent';
import ThirdComponent from './components/learningExamples/ThirdComponent'
import Counter from './components/counter/Counter';

class App extends Component
{
  render() {
    return (
      <div className="mainDiv">
        <Counter />
     </div>
    );
  }
}

class LearningComponent
{
  render() {
    return (
      <div className="learningComponent">
        <div className="App">
          My Hello World
          <FirstComponent />
        </div>
        <div className="SecondDiv">
          <SecondComponent />
          <ThirdComponent />
        </div>
      </div>
    );
  }
}

export default App;
