import React from "react";
import styled from "styled-components";

import { iphoneImgs, routesName } from "../../definitions";

function TopMenuItem(props) {
    const { val, idx, goToIndex, currentIndex } = props;
    return (
        <TopMenuItemWrapper onClick={() => goToIndex(idx)}>
            <TopMenuItemImage>
                <img src={iphoneImgs[val]} style={{width: '100%'}}/>
            </TopMenuItemImage>
            <TopMenuItemTextWrapper>
                <TopMenuItemText active={idx==currentIndex}>
                    { routesName[val] }
                </TopMenuItemText>
            </TopMenuItemTextWrapper>
        </TopMenuItemWrapper>
    )
}

const TopMenuItemWrapper = styled.div`
    display: flex;
    height: 100%;
    cursor: pointer;
    margin-left: 2rem;
    margin-right: 2rem;
`;

const TopMenuItemImage = styled.div`
    width: 2.5rem;
    height: 100%;
    padding-top: 0.75rem;
    overflow-y: hidden;
`;

const TopMenuItemText = styled.span`
    color: ${(props) => props.active ? 'white': 'grey'};
    
    ${TopMenuItemWrapper}:hover & {
        color: white;
    }
`;

const TopMenuItemTextWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 0.5rem;
    padding-bottom: 0.5rem;
    font-family: 'Inter';
    font-size: 0.85rem;
`;

export default TopMenuItem;
