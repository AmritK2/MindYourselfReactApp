/*
    ./client/components/App.jsx
*/
import React from 'react';
import CodeWarsData from './API.jsx';

class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Intern Pack</h1>
         <CodeWarsData username = "jdvb " />
      </div>);
  }
}
export default App;