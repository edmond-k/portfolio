import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br/>
      Edmond's Personal Portfolio
    </SectionTitle>
    <SectionText>
      Edmond is a Front-End Developer with a knack for learning and mastering development technologies to produce scalable and user-friendly websites.
    </SectionText>
  </LeftSection>
 </Section>
);

export default Hero;