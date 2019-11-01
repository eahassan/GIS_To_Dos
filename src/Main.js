import React from 'react';
import Buttonbar from './Buttonbar.js';
import Map from './Map.js';

class Main extends React.Component {
  render() {
      
    return (
            
      <main id="mainContent" tabIndex="-1">
       <div className="w3-row">
        <div className="w3-container w3-col">
        
         <Buttonbar/>
         <Map/>
      
      </div>
      </div>
      </main>
        
    );
  }
}

export default Main;