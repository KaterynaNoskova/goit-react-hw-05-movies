import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
display: inline-flex;
align-items: center;
justify-content: center;
gap: 7px;
padding: 14px 0;
color: coral;
text-decoration: none;
font-weight: 400;`;

export const LinkBack = ({to, children})=>{
    return <LinkStyle to={to}>{children}</LinkStyle>;
};