import React from 'react';
import { Navbar, Page, Searchbar, Subnavbar, List, ListItem,   NavLeft,  NavTitle,  NavRight,  Link } from 'framework7-react';

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
      <NavTitle>Sessions</NavTitle>
      <NavRight>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="right"></Link>
      </NavRight> 

    </Navbar>
    <List className="searchbar-not-found">
      <ListItem title="Nothing found"></ListItem>
    </List>
    <List className="search-list searchbar-found">
      <ListItem title="Rasım Avcı"></ListItem>
      <ListItem title="Call 2"></ListItem>
      <ListItem title="Call 3"></ListItem>
    </List>
  </Page>
);