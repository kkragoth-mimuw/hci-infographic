import React, {useEffect, useRef, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {isNil, equals, findIndex} from "ramda";
import { withRouter } from 'react-router-dom';

import TopMenu from "../TopMenu";
import MainSwitch from "../MainSwitch";
import { routes } from "../../definitions";

function Main(props) {
    const location = useLocation();

    const index = findIndex(equals(location.pathname), routes);

    const [iphoneIndex, setIphoneIndex] = useState(index + 1);
    const [goingToLocation, setGoingToLocation] = useState(null);

    const goToIndex = React.useCallback((index) => {
        setGoingToLocation(index);
    }, [props.history]);

    useEffect(() => {
        if (!isNil(goingToLocation)) {
            setIphoneIndex(goingToLocation);
            setGoingToLocation(null);
            iphoneIndexRef.current = goingToLocation;
            props.history.push(routes[iphoneIndexRef.current - 1]);
        }
    }, [goingToLocation]);

    const iphoneIndexRef = useRef(iphoneIndex);

    const goLeftHandler = React.useCallback(() => {
        if (iphoneIndexRef.current > 1) {
            setGoingToLocation(iphoneIndexRef.current - 1)
        }
    }, [props.history])


    const goRightHandler = React.useCallback(() => {

        if (iphoneIndexRef.current <= routes.length) {
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
        return ref.current || - 2;
    }

    const prevIndex = usePrevious(iphoneIndex)

    return (
        <>
            <TopMenu goToIndex={(indx) => goToIndex(indx)} currentIndex={index} />
            <MainSwitch prevIndex={prevIndex} goingToLocation={goingToLocation} handlers={handlers} />
        </>
    )
}

export default withRouter(Main);

export {
    routes
};
