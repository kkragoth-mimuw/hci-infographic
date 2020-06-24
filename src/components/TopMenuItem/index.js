import React from "react";
import styled from "styled-components";

import { iphoneImgs, routesName } from "../../definitions";

function TopMenuItem(props) {
    const { val, idx, goToIndex } = props;
    return (
        <TopMenuItemWrapper onClick={() => goToIndex(idx)}>
            <TopMenuItemImage>
                <img src={iphoneImgs[val]} style={{width: '100%'}}/>
            </TopMenuItemImage>
            <TopMenuItemTextWrapper>
                <TopMenuItemText>
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
`;

const TopMenuItemImage = styled.div`
    width: 3rem;
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
    font-size: 1.15rem;
`;

export default TopMenuItem;