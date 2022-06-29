import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);
 let newState = {}

  
newState = store.getState()
 
 

const App = () => {
  

  return (
    <div className="App">
      <h1>
        {Object.keys(newState).map((item, itemIndex) => (
          <p key={`item_${itemIndex}`}>
            {item}: {newState[item]}
          </p>
        ))}
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
