/*
    ./client/components/App.jsx
*/
import React from 'react';
import CodeWarsData from './API.jsx';
import CodeSchoolData from './APICodeSchool.jsx';

class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Intern Pack</h1>
         <CodeWarsData username = "Amrit2" />
         <CodeSchoolData user = "AmritK2"/>
      </div>
    );
  }
}
export default App;

