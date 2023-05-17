import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import EventHolder from "./EventHolder/EventHolder";

export const Context = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new EventHolder()
    }}>
        <App />
    </Context.Provider>
);

