// BotCard.js
// -------------------------------
// Displays a single bot profile card.
//
// Core interactions:
// 1. Click the image → Enlist the bot to your army
// 2. Click the info area → Show more details (BotSpecs view - optional/advanced)
// 3. Click the red "x" → Permanently delete (discharge) the bot
//
// Props:
// - bot: object (bot data)
// - onEnlist: function (handle adding bot to army)
// - onShowSpecs: function (handle showing detailed view)
// - onDischarge: function (handle deleting bot)
// - enlisted: boolean (true if bot is already in army)
// -------------------------------

import React from "react";

function BotCard({ bot, onEnlist, onShowSpecs, onDischarge, enlisted }) {
  return (
    <div className="bot-card">
      {/* ========== Bot Avatar ========== */}
      {/* Clicking the image enlists the bot */}
      <img
        src={bot.avatar_url}
        alt={`${bot.name} avatar`}
        className="bot-avatar"
        onClick={onEnlist}
      />

      {/* ========== Bot Info Section ========== */}
      {/* Clicking this area can show full bot specs (advanced feature) */}
      <div className="bot-info" onClick={onShowSpecs}>
        <h3 className="bot-name">
          {bot.name} {enlisted && "(Enlisted)"}
        </h3>
        <p className="bot-phrase">{bot.catchphrase}</p>
        <p className="bot-stats">
          {bot.bot_class} • HP: {bot.health} • DMG: {bot.damage} • ARM: {bot.armor}
        </p>
      </div>

      {/* ========== Bot Actions ========== */}
      {/* Clicking 'x' discharges (deletes) the bot */}
      <button className="discharge-btn" onClick={onDischarge}>
        x
      </button>
    </div>
  );
}

export default BotCard;
