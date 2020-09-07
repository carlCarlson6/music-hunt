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
        color: var(--mainColor);
    }
    h2 {
        color: var(--secondaryColor);
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
            margin-right: 0.8rem;
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
    
        a {
            margin-left: 0rem;
        }
    
    }
`;


export const InputSubmitVote = styled.button<{voted:boolean}>`
    background-color: ${props => props.voted? 'var(--mainColor)': 'var(--grey3)'};
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