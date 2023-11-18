import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
//import css

const LinkStyle = styled(NavLink)`
color: black;
&.active{
  color:red;
}`;

export function Navigation(){
  return(
    <div>
        <header>
            <nav>
                <LinkStyle to="/"></LinkStyle>
                <LinkStyle to="/movies">Movies</LinkStyle>
            </nav>
        </header>
        <Suspense fallback={<div>Please wait, we loading the page</div>}>
            <Outlet/>
        </Suspense>
    </div>
  );
}