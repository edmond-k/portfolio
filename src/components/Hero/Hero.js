import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br/>
      Edmond's Personal Portfolio
    </SectionTitle>
    <SectionText>
      Edmond is a Front-End Developer with a knack for learning and mastering development technologies to produce scalable and user-friendly websites.
    </SectionText>
    <Button onClick={() => window.location = 'https://github.com/edmond-k'}>Github</Button>
  </LeftSection>
 </Section>
);

export default Hero;
