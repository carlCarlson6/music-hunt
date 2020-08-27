import styled from "@emotion/styled";

export const Nav = styled.nav`
    padding-left: 2rem;
    
    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--mainColor);
        font-family: 'Ubuntu', sans-serif;

        &:last-of-type {
            margin-right: 0;
        }
    }

`;