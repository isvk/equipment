import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import ListEquipments from "src/component/ListEquipments/ListEquipments";

function App() {
    return (
        <Wrapper>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/list_equipments" />
                </Route>
                <Route exact path="/list_equipments" component={ListEquipments} />
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
