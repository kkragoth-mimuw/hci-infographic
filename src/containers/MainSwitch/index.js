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

import Page from '../../components/Page';

const keyMap = {
    GO_LEFT: "left",
    GO_RIGHT: "right"
};


function MainSwitch(props) {
    const location = useLocation()
    const [iphoneIndex, setIphoneIndex] = useState(1);
    const [goingToLocation, setGoingToLocation] = useState(null);

    useEffect(() => {
        if (!isNil(goingToLocation)) {
            setIphoneIndex(goingToLocation);
            setGoingToLocation(null);
            iphoneIndexRef.current = goingToLocation;
            props.history.push('/iphone' + (iphoneIndexRef.current));
        }
    }, [goingToLocation]);

    const iphoneIndexRef = useRef(iphoneIndex);

    const goLeftHandler = React.useCallback(() => {
        if (iphoneIndexRef.current > 1) {
            setGoingToLocation(iphoneIndexRef.current - 1)
        }
    }, [props.history])


    const goRightHandler = React.useCallback(() => {

        if (iphoneIndexRef.current <= 3) {
            setGoingToLocation(iphoneIndexRef.current + 1)
        }
    }, [iphoneIndex, props.history])

    const handlers = {
        GO_LEFT: goLeftHandler,
        GO_RIGHT: goRightHandler
    };

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const prevIndex = usePrevious(iphoneIndex)

    console.log(location.pathname);

    return (
        <HotKeys focused={true} attach={window} keyMap={keyMap} handlers={handlers}>
            <div style={{overflowX: 'hidden', overflowY: 'hidden', display: 'flex', flexDirection: 'row', width: '100vw', }}>
            <AnimatePresence initial={false}>
                {location.pathname}
            <Switch location={location} key={location.pathname}>

                {/*<Redirect from="/" to="/iphone1"/>*/}
                {/*<Route path="/">*/}
                {/*    <Redirect to="/iphone1" />*/}
                {/*</Route>*/}
                <Route path="/iphone1">
                    <Page color="red" prevIndex={prevIndex} index={goingToLocation} myIndex={1}>{iphoneIndex} {prevIndex}</Page>
                </Route>
                <Route path="/iphone2">
                    <Page color="yellow" prevIndex={prevIndex} index={goingToLocation} myIndex={2}>{iphoneIndex} {prevIndex}</Page>
                    {/*<div className="fullscreen blue">*/}
                    {/*    {iphoneIndex}*/}
                    {/*</div>*/}
                </Route>
                <Route path="/iphone3">
                    <Page color="blue" prevIndex={prevIndex} index={goingToLocation} myIndex={3}>{iphoneIndex} {prevIndex}</Page>
                    {/*<div className="fullscreen green">*/}
                    {/*    {iphoneIndex}*/}
                    {/*</div>*/}
                </Route>
                <Route path="/iphone4" >
                    <Page color="green" prevIndex={prevIndex} index={goingToLocation} myIndex={4}>{iphoneIndex} {prevIndex}</Page>
                    {/*<div className="fullscreen yellow">*/}
                    {/*    {iphoneIndex}*/}
                    {/*</div>*/}
                </Route>
            </Switch>
            </AnimatePresence>
            </div>
        </HotKeys>
    );
}

export default withRouter(MainSwitch);
