import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCss3Full } from 'react-icons/di';
import {GiAries} from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';
import defaultColors from '../../themes/default';

const fontcolor=defaultColors.colors.headerfontcolor;

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: fontcolor}}>
          <DiCss3Full size="3rem" /><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/BobanJaric">
        <AiFillGithub size="3rem"  />
      </SocialIcons>
      <SocialIcons href="https://rs.linkedin.com/in/boban-jaric-31310427">
        <AiFillLinkedin size="3rem"  />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/boban.jaric.1">
        <AiFillFacebook size="3rem"  />
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
