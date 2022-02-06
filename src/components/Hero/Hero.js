import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br />
        I'am Boban,
      </SectionTitle>
      <SectionText>
        A Freelance JavaScript Developer
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;