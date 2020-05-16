import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import Links from '../Links';

const Container = styled.div.attrs({
    className: 'container',
})`
    display: flex;
    position: relative;
    margin: 0px;
    padding: 0px;
    width: 320px;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg',
})`
    display: flex;
    flex-direction: column;
    background: #19223F;
    position: fixed;
    width: 320px;
    height: 100%;
    padding: 0px;
    margin: 0px;
`

const NavBar = () => (
    <Container>
        <Nav>
            <Logo />
            <Links />
        </Nav>
    </Container>
)

export default(NavBar);