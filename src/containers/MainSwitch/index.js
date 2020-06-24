import React, {useState, useRef, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useLocation
} from "react-router-dom";
import { isNil } from 'ramda';
import { AnimatePresence } from "framer-motion";
import { HotKeys } from "react-hotkeys";
import { withRouter } from 'react-router-dom';

import { routes } from "../Main";
import { mapIndexed } from "../../utils";
import Page from '../../components/Page';

const keyMap = {
    GO_LEFT: "left",
    GO_RIGHT: "right"
};

function MainSwitch(props) {
    const {prevIndex, goingToLocation, handlers} = props;
    const location = useLocation()

    return (
        <HotKeys focused={true} attach={window} keyMap={keyMap} handlers={handlers}>
            <AnimatePresence initial={false}>
                {location.pathname}
            <Switch location={location} key={location.pathname}>
                { mapIndexed((routeName, idx) => (
                    <Route path={routeName}>
                        <Page prevIndex={prevIndex} index={goingToLocation} myIndex={idx + 1} val={routeName} />
                    </Route>
                    ), routes
                )}
            </Switch>
            </AnimatePresence>
        </HotKeys>
    );
}

export default withRouter(MainSwitch);
