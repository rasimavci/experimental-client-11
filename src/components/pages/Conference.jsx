import React from 'react';
import { Button, Navbar, Page, Searchbar, Subnavbar, Block, BlockTitle,   NavLeft,  NavTitle,  NavRight,  Link } from 'framework7-react';

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
      <NavTitle>Conference</NavTitle>
      <NavRight>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="right"></Link>
      </NavRight> 

    </Navbar>
    <BlockTitle>Conference Url</BlockTitle>
    <Block strong>
          <Button fill raised panelOpen="left">START CONFERENCE</Button>
    </Block>
  </Page>
);