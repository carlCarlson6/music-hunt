import styled from "@emotion/styled";

export const AlbumCommentsContainer = styled.div`

`; 

export const AlbumPageInfoContainer = styled.div`
    grid-template-columns: auto auto;
    display: grid;
    margin-left: 3rem;
    padding-left: 1.5rem;
    height: 50vh;

    iframe {
        padding-top: 2.2rem;
        width: 80%;
        height: 100%;
    }

    h1 {
        color: var(--secondaryColor);
    }
    h2 {
        color: var(--mainColor);
    }
`;

export const AlbumVotesContainer = styled.div`
    display: flex;
    padding: 0rem 3rem;

    form {
        margin: 1rem auto;
        display: flex;

        p {
            padding-right: 1rem;
        }
        button {
            margin-top: 1rem;
            margin-right: 0.5rem;
            margin-left: 0;
            padding-right: 2.5rem;
            padding-left: 1rem;
            width:5%;
            height: 5%;
            align-items: center;
            
            p {
                align-items: center;
                text-align: center;
                vertical-align:middle;
            }
        }
    }
`;