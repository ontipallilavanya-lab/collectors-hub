function FilterBar({
  category,
  setCategory,
  condition,
  setCondition,
  sort,
  setSort,
}) {
  return (
    <div className="filter-container">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Coins">Coins</option>
        <option value="Stamps">Stamps</option>
        <option value="Figures">Figures</option>
        <option value="Comics">Comics</option>
      </select>

      <select
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      >
        <option value="All">All Conditions</option>
        <option value="New">New</option>
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>

    </div>
  );
}

export default FilterBar;