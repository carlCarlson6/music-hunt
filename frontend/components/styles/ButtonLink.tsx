import styled from "@emotion/styled";
import { IButtonLink } from "../../common/models/IButtonLink";

export const ButtonLink = styled.a<IButtonLink>`
    display: block;
    font-size: 1.8rem;
    border: 1px solid var(--grey3);
    padding: .4rem 1rem;
    margin: 1rem auto;
    text-align: center;

    background-color: ${props => props.bgColor? '#f0cf63' : 'white'};
    color: var(--grey1);

    &:hover {
        cursor: pointer;
    }
`;