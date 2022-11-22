import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import { State } from "./components/State";
import { reducers } from "./components/reducers";

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <State />
    </Provider>
  );
}

export default App;
