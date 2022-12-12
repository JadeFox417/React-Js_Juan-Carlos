import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Routers from "./routers";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routers />
      </div>
    </Provider>
  );
}

export default App;
