// SortBar.js
// -------------------------------
// Provides controls for sorting and filtering bots.
//
// Core behavior:
// - Lets the user choose how to sort (by health, damage, or armor).
// - Optionally lets the user filter by bot class.
//
// Props:
// - onSortChange: function (called when sort option changes)
// - onFilterChange: function (called when filter option changes)
// -------------------------------

import React from "react";

function SortBar({ onSortChange, onFilterChange }) {
  return (
    <div className="sortbar">
      <h3>Sort & Filter Bots</h3>

      {/* ===== Sort Section ===== */}
      <label htmlFor="sort-select">Sort by:</label>
      <select
        id="sort-select"
        onChange={(e) => onSortChange(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>

      {/* ===== Filter Section ===== */}
      <label htmlFor="filter-select">Filter by Class:</label>
      <select
        id="filter-select"
        onChange={(e) => onFilterChange(e.target.value)}
        defaultValue=""
      >
        <option value="">All</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Captain">Captain</option>
        <option value="Witch">Witch</option>
      </select>
    </div>
  );
}

export default SortBar;
