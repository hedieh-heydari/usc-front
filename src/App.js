import React from 'react';
import{Routes,Route} from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Cart from './core/Cart'
import UserDashboard from './user/UserDashboard'
import PrivateRoutes from './auth/handle/PrivateRoutes'



function App(){    
  return (
      <div>        
          <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/Signup"  element={<Signup/>}/>
            <Route path="/Signin"  element={<Signin/>}/>
            <Route path="/Cart"  element={<Cart/>}/>
            <Route path='/user/dashboard' element={<PrivateRoutes><UserDashboard/></PrivateRoutes>}/>
            {/* <PrivateRoutes path='/user/dashboard' element={<UserDashboard/>}/> */}
          </Routes>
        
      </div>
  );
}
export default App;

