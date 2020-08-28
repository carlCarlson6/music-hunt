import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
    border-bottom: 2px solid var(--grey2);
    padding: 1rem 1.4rem;
`;

export const HeaderContainer = styled.div`
    width: 99%;
    @media(min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const HeaderControlContainer = styled.div`
    display: flex;
    align-items: center;
`;