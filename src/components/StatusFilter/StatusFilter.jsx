import { useSelector, useDispatch } from "react-redux";
import { FilterButton } from "components/FilterButton/FilterButton";
import { statusFilters } from "redux/filters/constants";
import { getStatusFilter } from "redux/filters/selectors";
import { setStatusFilter } from "redux/filters/filtersSlice";
import css from "./StatusFilter.module.css";

 const StatusFilter= () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <FilterButton
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </FilterButton>
      <FilterButton
        selected={filter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        Follow
      </FilterButton>
      <FilterButton
        selected={filter === statusFilters.following}
        onClick={() => handleFilterChange(statusFilters.following)}
      >
        Following
      </FilterButton>
    </div>
  );
};
export default StatusFilter;