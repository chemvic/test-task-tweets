import clsx from "clsx";
import css from "./FilterButton.module.css";

export const FilterButton = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
