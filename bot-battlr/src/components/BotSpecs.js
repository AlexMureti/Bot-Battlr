// BotSpecs.js
// -------------------------------
// Displays detailed information for a single bot.
//
// Core behavior:
// - Shown when the user clicks a bot (advanced deliverable).
// - Lets the user go back to the bot list or enlist the bot.
//
// Props:
// - bot: object (selected bot to display)
// - onBack: function (go back to bot list)
// - onEnlist: function (enlist this bot into the army)
// -------------------------------

import React from "react";

function BotSpecs({ bot, onBack, onEnlist }) {
  // If no bot is selected, show a simple message
  if (!bot) {
    return <div className="bot-specs-empty">Select a bot to see its details.</div>;
  }

  return (
    <div className="bot-specs">
      {/* Bot Name */}
      <h2 className="bot-specs-name">{bot.name}</h2>

      {/* Avatar */}
      <img
        src={bot.avatar_url}
        alt={`${bot.name} avatar`}
        className="bot-specs-avatar"
      />

      {/* Bot Info */}
      <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>

      {/* Action Buttons */}
      <div className="bot-specs-actions">
        <button onClick={onBack}>Back to Collection</button>
        <button onClick={() => onEnlist(bot)}>Enlist Bot</button>
      </div>
    </div>
  );
}

export default BotSpecs;
