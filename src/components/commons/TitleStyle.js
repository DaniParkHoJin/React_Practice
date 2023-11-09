import styled, { css } from 'styled-components';
import fontSize from '../../styles/commons/fontSize';


export const MainTitle = styled.div `
    font-size: ${({ size }) => (size ? fontSize[size] : fontSize.big)};
    border-bottom: 2px solid ${(bColor) => bColor || '#000'};
    padding-bottom: 10px;
    margin-botton: 10px;
    ${(color) => color && css`
    color: ${color};
    `}
`;
