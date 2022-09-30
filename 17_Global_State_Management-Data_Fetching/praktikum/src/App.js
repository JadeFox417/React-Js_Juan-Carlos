import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./App.css";
import Routers from "./router/Routers";
import { store, persistedStore } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <Routers />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
