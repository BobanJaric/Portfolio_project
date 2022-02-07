import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="+381642678790">+381642678790</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jaric.boban1@gmail.com">jaric.boban1@gmail.com</LinkItem>
        </LinkColumn>
        <SocialContainer>
          <CompanyContainer>
            <Slogan>Ready for new project</Slogan>
          </CompanyContainer>
          <SocialIcons href="https://github.com/BobanJaric">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://rs.linkedin.com/in/boban-jaric-31310427">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/boban.jaric.1">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </LinkList>

    </FooterWrapper>
  );
};

export default Footer;
