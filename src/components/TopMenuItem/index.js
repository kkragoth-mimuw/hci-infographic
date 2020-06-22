import React from "react";
import styled from "styled-components";

function TopMenuItem(props) {
    return (
        <TopMenuItemWrapper>
            <TopMenuItemImage/>
            <TopMenuItemTextWrapper>
                <TopMenuItemText>
                    iphone1
                </TopMenuItemText>
            </TopMenuItemTextWrapper>
        </TopMenuItemWrapper>
    )
}

const TopMenuItemWrapper = styled.div`
    display: flex;
    height: 100%;
`;

const TopMenuItemImage = styled.div`
    width: 3.5rem;
    height: 100%;
    
    background: red;
`;

const TopMenuItemText = styled.span`
    color: white;
`;

const TopMenuItemTextWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 0.5rem;
    padding-bottom: 0.5rem;
`;

export default TopMenuItem;