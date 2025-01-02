import React from "react";
import styles from "@/styles/FilterControls.module.css";
import { FilterControlsProps, FilterType } from "@/types/task";

const FilterControls: React.FC<FilterControlsProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  // Array of filter options for easy iteration
  const filters: FilterType[] = ["all", "completed", "pending"];

  return (
    <div className={styles.filterControls}>
      {/* Dynamically rendering buttons for each filter option */}
      {filters.map((filter) => (
        <button
          key={filter}
          className={`${styles.filterButton} ${
            currentFilter === filter ? styles.active : ""
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}{" "}
        </button>
      ))}
    </div>
  );
};

export default FilterControls;
