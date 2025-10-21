// App.js
// -------------------------------
// Main entry point of the Bot Battlr app.
//
// Responsibilities:
// - Fetch bots from the backend (db.json via JSON server).
// - Manage the user's bot army (add, release, discharge).
// - Handle sorting (and later filtering if needed).
// -------------------------------

import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import SortBar from "./components/SortBar";
import "./App.css";

function App() {
  // ========== State Variables ==========
  const [bots, setBots] = useState([]);          // all bots from server
  const [yourArmy, setYourArmy] = useState([]);  // user's enlisted bots
  const [sortOption, setSortOption] = useState(""); // current sort selection
  const [filterOption, setFilterOption] = useState(""); // optional filter

  // ========== Fetch Data from Backend ==========
  useEffect(() => {
    fetch("http://localhost:3000/bots") // make sure this matches json-server port
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  // ========== Event Handlers ==========

  // Add bot to army (only if not already enlisted)
  function enlistBot(bot) {
    const alreadyEnlisted = yourArmy.some((b) => b.id === bot.id);
    if (!alreadyEnlisted) {
      setYourArmy([...yourArmy, bot]);
    }
  }

  // Remove bot from army (frontend only)
  function releaseBot(bot) {
    setYourArmy(yourArmy.filter((b) => b.id !== bot.id));
  }

  // Permanently remove bot from server + army
  function dischargeBot(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" })
      .then(() => releaseBot(bot))
      .catch((error) => console.error("Error deleting bot:", error));
  }

  // ========== Sorting Logic ==========
  const sortedBots = [...bots].sort((a, b) => {
    if (!sortOption) return 0;
    return b[sortOption] - a[sortOption];
  });

  // ========== Filtering Logic (Optional) ==========
  const visibleBots = filterOption
    ? sortedBots.filter((bot) => bot.bot_class === filterOption)
    : sortedBots;

  // ========== Render UI ==========
  return (
    <div className="App">
      <h1>My Bot Battlr</h1>

      {/* Sorting and filtering bar */}
      <SortBar
        onSortChange={setSortOption}
        onFilterChange={setFilterOption}
      />

      {/* List of all bots */}
      <BotCollection bots={visibleBots} onEnlist={enlistBot} />

      {/* User's enlisted bots */}
      <YourBotArmy
        yourArmy={yourArmy}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default App;
