import React from 'react';
import styled from 'styled-components';

import TopMenuItem from "../../components/TopMenuItem";

const TopMenuHeight = 60;

function TopMenu(props) {
    return (
        <TopMenuWrapper>
            { [0, 1, 2, 3, 4, 5].map(() => <TopMenuItem/>)}
        </TopMenuWrapper>
    );
}

const TopMenuWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    height: ${TopMenuHeight}px;
    max-height: ${TopMenuHeight}px;
    width: 100vw;
    background: #171719
`;

export default TopMenu;

export {
    TopMenuHeight
};