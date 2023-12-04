import { useState } from 'react';
import './Sidebar.css';

/* npm install react-bootstrap-icons --save */

/* import * as Icon from 'react-bootstrap-icons'; */
import { Speedometer2 } from 'react-bootstrap-icons';
import { ClipboardPulse } from 'react-bootstrap-icons';
import { ChatSquare } from 'react-bootstrap-icons';
import { Gear } from 'react-bootstrap-icons';
import { Power } from 'react-bootstrap-icons';
import { Justify } from 'react-bootstrap-icons';

function Sidebar() {
  const [navCollapse, setNavCollapse] = useState(false)
  return (
    <div className="container">

      <div className='sticky'>

      <div className='sidebar_content'>
        
      

        <div className={`sidebar-container ${navCollapse ? "navCollapse" : ""}`}>
          <div className='svg'>
          
          <Justify onClick={e => setNavCollapse(!navCollapse)}/>

          </div>


          <div className="nav-option option1">
            {/* <Speedometer2/> */}
            <i class="bi bi-calendar2-check-fill"></i>
            <h3>Today</h3>
          </div>
          <div className="nav-option option1">
            {/* <ClipboardPulse/> */}
            <i class="bi bi-award-fill"></i>
            <h3>Popular</h3>
          </div>
        
          <div className="nav-option option1">
          <i class="bi bi-search-heart-fill"></i>
            <h3>Search</h3>
          </div>

          <div className="nav-option option1">
          <i class="bi bi-map-fill"></i>
            <h3>Map</h3>
          </div>
        
          <div className="nav-option option1">
          <i class="bi bi-shuffle"></i>
            <h3>Random</h3>
          </div>
        
      </div>
        
        </div>

      </div>
        
    </div>
  );
}

export default Sidebar;