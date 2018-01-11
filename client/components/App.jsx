/*
    ./client/components/App.jsx
*/
import React from 'react';

import UserData from './Form.jsx';
import UserGradData from './FormGrad.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showUserInternDashboard: false,
            showUserGradDashboard: false,
        };
        this.handleInternSubmit = this.handleInternSubmit.bind(this);
        this.handleGradSubmit = this.handleGradSubmit.bind(this);
    }

    handleInternSubmit(event) {
        this.setState({...this.state, showUserDashboard: true});
        event.preventDefault();
    }
    handleGradSubmit(event) {
        this.setState({...this.state, showUserGradDashboard: true});
        event.preventDefault();
    }

   render(){
        const chosenInternForm = this.state.showUserDashboard ? <div style={{textAlign: 'center'}}>
            <UserData/>
        </div> : "";
       const chosenGradForm = this.state.showUserGradDashboard? <div style={{textAlign: 'center'}}>
           <UserGradData/>
       </div> : "";

       return (
           <form>
               <div style={{textAlign: 'center'}}>
               <button type="submit" onClick={this.handleInternSubmit}>Intern Pack</button>
                   {chosenInternForm}

               <button type="submit" onClick={this.handleGradSubmit}>Grad Pack</button>
                   {chosenGradForm}
               </div>

           </form>
       );
   }
}

export default App;

