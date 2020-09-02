import styled from "@emotion/styled";

export const InputSubmitForm = styled.button`
    background-color: var(--mainColor);
    width: 75%;
    max-width: 75%;
    padding: 1.5rem;
    color: black;
    font-size: 1.6rem;
    border: none;
    font-weight: 600;

    display: flex;
    
    margin-left: 15rem;

    &:hover {
        cursor: pointer;
        background-color: var(--secondaryColor);
        color: var(--grey3);
    }

`;