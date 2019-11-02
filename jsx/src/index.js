import React from 'react';
import ReactDOM from 'react-dom';

function getCurrentTime() {
  return (new Date()).toLocaleTimeString()
}
const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <h3>Welcome to My React Learning Project - Chapter JSX</h3>
      
      <p>
        this chapter will only contain some basic project structure based on <code>create-react-app </code> 
         and a very basic example of JSX rendering:
      </p>
      <ul>
        <li>Class and Style Attributes</li>
        <li>JS Variable Interpolation (displaying current time)</li>
      </ul>

      <div style={{ color: 'red' }}>Current Time: <b>{getCurrentTime()}</b></div>
      <small>
        Note that this time is not updating. reason being that this function is only called at the time
        of rendering. The updation part will be done in state chapter (we will update state variable which will force re-rendering of the updated value).
      </small>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))