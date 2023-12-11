function FilterComponent({ filterText, onFilter, onClear }) {
    return (
      <>
        <input
          id="search"
          type="text"
          placeholder="Filter By Name"
          aria-label="Search Input"
          value={filterText}
          onChange={onFilter}
        />
        <button onClick={onClear} type="button">
          Clear
        </button>
      </>
    );
  }
  
  export default FilterComponent;