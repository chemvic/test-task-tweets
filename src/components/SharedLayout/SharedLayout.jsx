import css from './SharedLayout.module.css';
import { Outlet, NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { resetLimit } from "redux/currentLimit/currentLimitSlice";

import { Suspense } from 'react';


const SharedLayout =( ) => {

  const dispatch= useDispatch();
  
    return(
        <>
        <div >
          <header className={css.header}>
             <nav className={css.nav}>
        <li  className={css.link}>
                  <NavLink to="/" style={({ isActive }) =>({color: isActive ? '#5CD3A8' : '#EBD8FF'})} onClick={() => { dispatch(resetLimit()) }}>Home</NavLink>
        </li>
        <li  className={css.link}>
                  <NavLink to="/tweets" style={({ isActive }) =>({color: isActive ? '#5CD3A8' : '#EBD8FF'})}>Tweet cards</NavLink>
        </li>
      </nav>
        </header>

        </div>      
        
        <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense> 
        </main>
     
        </>
     

    )
};
export default SharedLayout; 