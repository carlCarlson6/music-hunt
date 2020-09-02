import styled from "@emotion/styled";

export const AlbumDetailInfoContainer = styled.div`
    max-width: 75%;
    width: 30%;
    border-right: 2px solid var(--grey3);
    margin-right: 1rem;

    &:hover {
        cursor: pointer;
    
        h2 {
            color: var(--opositeColor);
        }
        h3 {
            color: var(--mainColor);
        }
    }
`;