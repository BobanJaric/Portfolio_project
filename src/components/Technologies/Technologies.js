import React from 'react';
import { DiNodejsSmall, DiReact, DiMongodb } from 'react-icons/di';
import { RiFlutterFill } from 'react-icons/ri';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, IconsHolder } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I'm looking for opportunity to cooperate with companies / individuals. <br />
      Have any questions? Contact me.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>
            Front-end
          </ListTitle>
          <ListParagraph>
            Experiance with <br />
            React.js & Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IconsHolder  >
        <DiNodejsSmall size="3rem" />
        <DiMongodb size="3rem " />
        </IconsHolder>
        <br />
        <ListContainer>
          <ListTitle>
            Back-end
          </ListTitle>
          <ListParagraph>
            Experiance with <br />
            Node.js & MongoDb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RiFlutterFill size="3rem" />
        <br />
        <ListContainer>
          <ListTitle>
            Mobile app
          </ListTitle>
          <ListParagraph>
            Experiance with <br />
            Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section >
);

export default Technologies;
