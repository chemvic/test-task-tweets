import css from './SharedLayout.module.css';
import { Outlet, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { resetLimit } from "redux/currentLimit/currentLimitSlice";
import { resetUsers } from "redux/users/usersSlice";

import  StatusFilter  from 'components/StatusFilter';
import { selectUsers } from 'redux/users/selectors';

import { Suspense } from 'react';


const SharedLayout =( ) => {

  const dispatch= useDispatch();
  const users=useSelector(selectUsers);
  
    return(
        <>
        <div >
          <header className={css.header}>
             <nav className={css.header_nav}>
        <li  className={css.link}>
                  <NavLink to="/" style={({ isActive }) =>({color: isActive ? '#5CD3A8' : '#EBD8FF'})} onClick={() => { dispatch(resetLimit());dispatch(resetUsers()) }}>Home</NavLink>
        </li>
        <li  className={css.link}>
                  <NavLink to="/tweets" style={({ isActive }) =>({color: isActive ? '#5CD3A8' : '#EBD8FF'})}>Tweet cards</NavLink>
        </li>
      </nav>
      <div className={css.header_filter}>{users.length>0&&<StatusFilter />} </div>
     
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