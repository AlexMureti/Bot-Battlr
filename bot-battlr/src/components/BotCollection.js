// BotCollection.js
// -------------------------------
// Displays all available bots on the main page.
//
// Core behavior:
// - Receives an array of bot objects from the parent (App).
// - Maps through the bots and renders one BotCard per bot.
// - Passes down the enlist handler so a user can add bots to their army.
//
// Props:
// - bots: array (list of all bots from the server)
// - onEnlist: function (called when a bot is enlisted)
// -------------------------------

import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist }) {
  return (
    <div className="bot-collection">
      {/* If there are no bots, show a simple message */}
      {bots.length === 0 ? (
        <p>No bots available at the moment.</p>
      ) : (
        bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onEnlist={() => onEnlist(bot)} // Pass the bot object upward
          />
        ))
      )}
    </div>
  );
}

export default BotCollection;
