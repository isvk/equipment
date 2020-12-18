import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import CatalogPage from "src/component/CatalogPage/CatalogPage";

function App() {
    return (
        <Wrapper>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/catalog" />
                </Route>
                <Route exact path="/catalog" component={CatalogPage} />
            </Switch>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 935px;
    margin: 0 auto;
    padding: 0 1em;
`;

export default App;
