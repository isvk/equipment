import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "src/component/Pages/MainPage/MainPage";
import NodePage from "src/component/Pages/NodePage/NodePage";
import CreateItemPage from "src/component/Pages/CreateItemPage/CreateItemPage";
import EditItemPage from "src/component/Pages/EditItemPage/EditItemPage";
import "typeface-roboto";

import "./App.scss";

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/catalog" />
                </Route>
                <Route exact path="/catalog" component={MainPage} />
                <Route exact path="/catalog/node/:nodeId" component={NodePage} />
                <Route exact path="/catalog/node/:nodeId/create_item" component={CreateItemPage} />
                <Route exact path="/catalog/item/:itemId" component={EditItemPage} />
            </Switch>
        </div>
    );
}

export default App;

export interface INodeUrl {
    nodeId: string;
}

export interface IEditItemUrl {
    itemId: string;
}

export interface ICreateItemUrl {
    nodeId: string;
}
