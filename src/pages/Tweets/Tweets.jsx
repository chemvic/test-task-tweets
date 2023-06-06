import css from './Tweets.module.css';
import Card from 'components/Card';
import LoadMoreButton from 'components/LoadMoreButton';
import Loader from 'components/Loader/Loader';
import ImageStub from 'components/ImageStub';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { store } from "redux/store.js";
import { resetUsers } from "redux/users/usersSlice";


import { useEffect } from "react";
import { fetchUsers } from "redux/users/operations";
import { resetLimit } from "redux/currentLimit/currentLimitSlice";
import { selectUsers, selectIsLoading, selectError } from 'redux/users/selectors';
import {  getStatusFilter } from "redux/filters/selectors";
import { statusFilters } from "redux/filters/constants";

const getVisibleUsers = (users, statusFilter) => {
   switch (statusFilter) {
     case statusFilters.follow:
       return users.filter(user => !user.isFollowed);
     case statusFilters.following:
       return users.filter(user => user.isFollowed);
     default:
       return users;
   }
 };



const Tweets = () => {

const dispatch= useDispatch();


     const users=useSelector(selectUsers);
     const statusFilter = useSelector(getStatusFilter);
     const visibleUsers = getVisibleUsers(users, statusFilter);
     const isLoading = useSelector(selectIsLoading);   
     const error = useSelector(selectError);
     const state = store.getState();
     const limit=state.currentLimit.limit;

     useEffect(() => {
           
      dispatch(fetchUsers(limit));
     
     }, [dispatch, limit]);



  
 
    return (<div className={css.container}>
          <ul className={css.users}>
       { visibleUsers.length>0 && visibleUsers
             .map(({  user,
                id,
                avatar,
                followers,
                tweets,isFollowed }) => (
                    <li key={id} className={css.users_item}>
                          <Card  user={user} avatar={avatar} followers={followers}
       tweets={tweets}
        id={id} isFollowed={isFollowed}/>
                    </li>
      
             ))}
        </ul>
        { visibleUsers.length>0 &&
        <div className={css.buttons}>
           <Link to="/" className={css.button} onClick={() => { dispatch(resetLimit());dispatch(resetUsers())}}>Back home</Link>
        {limit<12&&isLoading && !error && <Loader visible={true}/>}
        {limit>0&&limit<12&&<LoadMoreButton/>}
        </div>}
        { visibleUsers.length===0 &&<ImageStub/>}
        
       
    </div>
      
    );
};

export default Tweets;