import { useState } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

import Navbar from './NavBar/Navbar';
/*import SideBar from './NavBar/SideBar'
import Back from './NavBar/Back';*/
import Products from './Pages/Products';
import Viewproduct from './Pages/ViewProduct';

function App() {
  //const [sideb,setSideb]=useState(false)
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar />
     
    </div>
    <Route path="/" exact>
    <Products /> 
    </Route>
    <Route path="/Product/:id">
      <Viewproduct></Viewproduct>
    </Route>
    </BrowserRouter>
  );
}

export default App;
