import styled from "@emotion/styled";

export const AlbumsListContainer = styled.div<{onGrid: boolean}>`
    padding: 0 0 0 2.5rem;
    margin-left: 1rem;
    border-left: 2px solid var(--grey3);
    grid-template-columns: auto auto;
    display: ${props => props.onGrid? 'grid': 'inherit'}
    /*display: grid*/
`;