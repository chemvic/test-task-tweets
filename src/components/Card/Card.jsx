import PropTypes from 'prop-types';
import { updateUser, fetchUsers } from 'redux/users/operations';
import { useDispatch  } from 'react-redux';
import { store } from "redux/store.js";
import logo from 'images/Logo.png';
import css from './Card.module.css';

 const Card = ({
    user,
    id,
    avatar,
    followers,
    tweets,
    isFollowed
    }) => {
        const dispatch=useDispatch();
        const state = store.getState();
        const limit=state.currentLimit.limit;
        const formattedQuantity = followers.toLocaleString('en-US');


        const updatedIsFollowed = !isFollowed;
    const updatedFollowers = isFollowed
      ? (followers -= 1)
      : (followers += 1);
    
        const handleClick = () => {     

            dispatch(updateUser({id,updatedFollowers,updatedIsFollowed }));
            dispatch(fetchUsers(limit));
               
          };
        
    return (
        <div className={css.card}>
             <img className={css.logo} src={logo} width="76" alt="logo" />
         
 
             <div className={css.card_avatar}>
                 <img src={avatar} alt={user} width="62" height="62"className={css.avatar} />
             </div>
             <div className={css.card_info}>
             <p>
          <span>{tweets}</span> Tweets
        </p>
        <p>
          <span>{formattedQuantity}</span> Followers
        </p>
             </div>

  
    <button className={css.button} onClick={()=>{handleClick(id)}} style={{ backgroundColor: isFollowed ? '#5CD3A8' : '#EBD8FF' }}>
        {isFollowed ? 'Following' : 'Follow'}
      </button>

</div>
    );
};

Card.propTypes={
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}
export default Card;
