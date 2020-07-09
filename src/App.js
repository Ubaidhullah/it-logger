import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Addbtn from "./components/layout/Addbtn";
import AddLogModdle from "./components/logs/AddLogModdle";
import AddTechModal from "./components/techs/AddTechModal";
import EditLogModdle from "./components/logs/EditLogModdle";
import TechListModal from "./components/techs/TechListModal";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Logs from "./components/logs/Logs";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  useEffect(() => {
    //init matirialize js
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddLogModdle />
          <EditLogModdle />
          <AddTechModal />
          <TechListModal />
          <Addbtn />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
