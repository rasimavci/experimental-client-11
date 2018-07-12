import React from 'react';
import { Col, Row, BlockTitle, Block, Navbar, List, ListItem, Page, Searchbar, Subnavbar,  NavLeft,  NavTitle,  NavRight,  Link } from 'framework7-react';
import PhoneImg from '../../assets/demo/call_outline_blue.png';

export default () => (
  <Page>
    <Navbar>
      <Subnavbar inner={false}>
        <Searchbar
          searchContainer=".search-list"
          searchIn=".item-title"
        ></Searchbar>
      </Subnavbar>
      <NavLeft>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="left"></Link>
      </NavLeft>
      <NavTitle>Favorites</NavTitle>
      <NavRight>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="right"></Link>
      </NavRight> 

    </Navbar>
<BlockTitle>Favorites</BlockTitle>
<Block>
  <Row>
    <Col>
        <List className="search-list searchbar-found">
      <ListItem title="Meet Me Conference">
        <img alt="" slot="media" src={PhoneImg} width="33"/>
      </ListItem>
    </List>
    </Col>
    <Col>    
    <List className="search-list searchbar-found">
      <ListItem title="Call Grab">
        <img alt="" slot="media" src={PhoneImg} width="33"/>
      </ListItem>
    </List></Col>
  </Row>
  <Row>
    <Col>
        <List className="search-list searchbar-found">
      <ListItem title="VoiceMail">
        <img alt="" slot="media" src={PhoneImg} width="33"/>
      </ListItem>
    </List>
    </Col>
    <Col>    <List className="search-list searchbar-found">
      <ListItem title="Rasim Avcı">
        <img alt="" slot="media" src={PhoneImg} width="33"/>
      </ListItem>
    </List></Col>
  </Row>  
</Block>
  </Page>
);