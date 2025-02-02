import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: ${({theme}) => theme.COLORS.PINK};
    border: none;
    background-color: transparent;
    cursor: pointer;
    
    > svg {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
    
`