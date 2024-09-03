// src/utils/GlobalState.js
import React from 'react';

// Singleton class to hold global data
class GlobalState {
  static instance = null;

  constructor() {
    if (GlobalState.instance) {
      return GlobalState.instance;
    }

    this.data = {}; // This object can store any global data

    GlobalState.instance = this;
  }

  getData(key) {
    return this.data[key];
  }

  setData(key, value) {
    this.data[key] = value;
  }
}

const globalState = new GlobalState();

// Create a context for the global state
const GlobalStateContext = React.createContext(globalState);

// Provider component
export const GlobalStateProvider = ({ children }) => {
  return (
    <GlobalStateContext.Provider value={globalState}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Hook to use global state in components
export const useGlobalState = () => React.useContext(GlobalStateContext);
