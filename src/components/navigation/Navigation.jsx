import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Navigation.module.css';

const LinkStyle = styled(NavLink)`
margin-right: 5px;
color: black;
&.active{
  color: orange;
}`;

export function Navigation(){
  return(
    <div>
        <header>
            <nav className={css.navigation}>
                <LinkStyle to="/">Home</LinkStyle>
                <LinkStyle to="/movies">Movies</LinkStyle>
            </nav>
        </header>
        <Suspense fallback={<div>Please wait, we loading the page</div>}>
            <Outlet/>
        </Suspense>
    </div>
  );
}