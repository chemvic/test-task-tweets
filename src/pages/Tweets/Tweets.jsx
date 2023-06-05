import css from './Tweets.module.css';
import Card from 'components/Card';
import LoadMoreButton from 'components/LoadMoreButton';
import Loader from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { store } from "redux/store.js";


import { useEffect } from "react";
import { fetchUsers } from "redux/users/operations";
import { resetLimit } from "redux/currentLimit/currentLimitSlice";
import { selectUsers, selectIsLoading, selectError } from 'redux/users/selectors';

const Tweets = () => {

const dispatch= useDispatch();

     const users=useSelector(selectUsers);
     const isLoading = useSelector(selectIsLoading);   
     const error = useSelector(selectError);
     const state = store.getState();
     const limit=state.currentLimit.limit;

     useEffect(() => {
           
      dispatch(fetchUsers(limit));
     
     }, [dispatch, limit]);



  
 
    return (<div className={css.container}>

{isLoading && !error && <Loader visible={true}/>}
          <ul className={css.users}>
       { users.length>0 && users
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

        <div className={css.buttons}>
           <Link to="/" className={css.button} onClick={() => { dispatch(resetLimit()) }}>Back home</Link>
        {limit>0&&limit<12&&<LoadMoreButton/>}
        </div>

       
    </div>
      
    );
};

export default Tweets;