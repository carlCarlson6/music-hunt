import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
    margin-top: 3.5rem;
    padding: 1rem 0rem 0.5rem 2.5rem;
    border-top: 2px solid var(--grey2);
    display: flex;
    align-items: center;

    p {
        color: var(--secondaryColor);
        font-weight: 600;
    }

    @media(min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;