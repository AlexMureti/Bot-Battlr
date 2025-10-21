// YourBotArmy.js
// -------------------------------
// Displays the list of bots enlisted into the user's army.
//
// Core behavior:
// - Shows all bots currently enlisted.
// - "Release" removes the bot from the army (frontend only).
// - "Discharge" permanently deletes the bot (frontend + backend).
//
// Props:
// - yourArmy: array (list of enlisted bots)
// - releaseBot: function (removes bot from army)
// - dischargeBot: function (deletes bot from backend)
// -------------------------------

import React from "react";
import BotCard from "./BotCard"; // optional: reuse BotCard for uniform design

function YourBotArmy({ yourArmy = [], releaseBot, dischargeBot }) {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>

      {/* If no bots enlisted yet */}
      {yourArmy.length === 0 ? (
        <p>No bots in your army yet!</p>
      ) : (
        <div className="army-grid">
          {yourArmy.map((bot) => (
            <div key={bot.id} className="bot-card">
              {/* Bot name */}
              <h3>{bot.name}</h3>

              {/* Buttons for actions */}
              <div className="army-actions">
                <button onClick={() => releaseBot(bot)}>Release</button>
                <button onClick={() => dischargeBot(bot)}>Discharge</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
