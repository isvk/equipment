import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CatalogPage from "src/component/CatalogPage/CatalogPage";
import "typeface-roboto";

import "./App.scss";

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/catalog" />
                </Route>
                <Route exact path="/catalog" component={CatalogPage} />
            </Switch>
        </div>
    );
}

export default App;
