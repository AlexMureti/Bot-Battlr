# Bot Battlr

A small React app for the **SA-02 Phase 2 Code Challenge**.

---

##  Learning Goals
- Practice **components, props, state, events, and data fetching** in React.
- Connect a React frontend with a local `json-server` backend.
- Build clean, readable code with plenty of comments and structure.

---

##  Setup & Installation

### Clone or Create the App
Create a new React app (if you haven’t yet):

```bash
npx create-react-app bot-battlr
cd bot-battlr
##Add the Files
Replace your src/ and public/ folders with the files from this scaffold
(App.js, components/, index.js, etc.).

##Place Your db.json
Make sure your file structure looks like this:

pgsql
Copy code
bot-battlr/
├── db.json
├── package.json
├── src/
├── public/
##Start the JSON Server
Run the backend server in a separate terminal:

bash
Copy code
json-server --watch db.json --port 8001
Now you can open http://localhost:8001/bots to confirm it’s working.

##Start the React Frontend
In another terminal, start your React app:

bash
Copy code
npm start
This will open http://localhost:3000 in your browser.

##Core Features
View all bots — displayed in the BotCollection.
Enlist a bot — click a bot’s avatar to add it to YourBotArmy.
Release a bot — click “Release” in YourBotArmy to remove it.
Discharge a bot — click the red x to permanently delete it from both frontend & backend.

##Advanced Features (optional)
View a bot’s detailed specs (with Back and Enlist buttons).

Sort bots by health, damage, or armor via SortBar.

Filter bots by class (Support, Medic, Assault, etc.).

Enlist only one bot per class (extra challenge).

##API Reference
GET /bots
Returns a list of all bots.

DELETE /bots/:id
Removes a bot permanently.

##Manual Testing
Action	Expected Result
Click bot avatar	Bot appears in YourBotArmy
Click “Release” in army	Bot removed from army only
Click red “x”	Bot deleted from backend and removed everywhere
Click bot text area	Shows detailed BotSpecs view
Use SortBar	Bots reorder by chosen stat

##Notes
db.json must live at the root of your project.

The backend runs on port 8001 by default.

The React app runs on port 3000.

The app uses functional components and React Hooks (useState, useEffect).

Code includes helpful comments to guide beginners.

##Author
Ellie (Assistant Scaffold Builder)
Guided setup for the SA-02 Bot Battlr challenge.

##License
MIT License