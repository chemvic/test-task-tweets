import css from './LoadMoreButton.module.css';
import { useSelector, useDispatch  } from 'react-redux';
import { incrementLimit } from 'redux/currentLimit/currentLimitSlice';
import { fetchUsers } from 'redux/users/operations';

const LoadMoreButton =()=>{
const dispatch = useDispatch();

const limit = useSelector((state) => state.currentLimit.limit);

const handleIncrement=()=>{
    dispatch(incrementLimit());
    dispatch(fetchUsers(limit + 3));
}

    return(
        <button type='button' onClick={handleIncrement} className={css.button}>LOAD MORE</button>

    )
};
export default LoadMoreButton;