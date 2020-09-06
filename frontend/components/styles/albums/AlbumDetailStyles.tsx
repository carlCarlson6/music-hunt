import styled from "@emotion/styled";

export const AlbumDetailInfoContainer = styled.div`
    max-width: 75%;
    width: 30%;
    margin-right: 0rem;

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

export const AlbumDetailContainer = styled.div`
    border-bottom: 2px solid var(--grey3);
    padding-top: 2rem;
    padding-bottom: 1rem;
    display: flex;

    h2 {
        color: var(--mainColor);
    }
    h3 {
        color: var(--secondaryColor);
        padding-left: 2.5rem;
    }
    p {
        -left: 2.5rem;
    }
`;