import React from 'react';
import"./sidebar.css"

const Sidebar = ({show,click}) => {
    const sidebarClass=["side_bar"]
    if (show) {
        sidebarClass.push("show");
    }
    return (
        <div className={sidebarClass.join("")}>
          <ul className="sideb_link" onClick={click}>
               <li>
                  <a className="fas fa-shopping-cart"> </a>
                  <span className="cart_number">0</span>
                 </li>
           </ul>  
        </div>
    );
} 

export default Sidebar;
