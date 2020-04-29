import React from 'react';
import styled from 'styled-components';

import logo from '../../resources/logo.svg';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`
    padding-top: 32px;
    padding-bottom: 0px;
`

const Logo = () => (
    <Wrapper>
        <img src={logo} width="250" height="100" alt="TurnTable"/>
    </Wrapper>
);

export default Logo;