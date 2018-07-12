import React from 'react';
import { Icon, Navbar, Page, Searchbar, Subnavbar, List, ListItem,   NavLeft,  NavTitle,  NavRight,  Link } from 'framework7-react';

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
      <NavTitle>History</NavTitle>
      <NavRight>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="right"></Link>
      </NavRight> 

    </Navbar>
    <List className="searchbar-not-found">
      <ListItem title="Nothing found">
        
      </ListItem>
    </List>
    <List className="search-list searchbar-found">
      <ListItem title="something">
        <item-content>
          <item-inner>
<Icon slot="media" md="material:call_made"></Icon>       
          </item-inner>   
         </item-content>
      </ListItem>
      <ListItem title="rasim2">
        <item-content>
          <item-inner>
<Icon slot="media" md="material:call_made"></Icon>       
          </item-inner>   
         </item-content>
      </ListItem>
      <ListItem title="rasim3">
        <item-content>
          <item-inner>
<Icon slot="media" md="material:call_made"></Icon>       
          </item-inner>   
         </item-content>       
      </ListItem>
      <ListItem title="rasim4 ">
        <item-content>
          <item-inner>
<Icon slot="media" md="material:call_made"></Icon>       
          </item-inner>   
         </item-content>
      </ListItem>
      <ListItem title="bkocak ">
        <item-content>
          <item-inner>
<Icon slot="media" md="material:call_made"></Icon>       
          </item-inner>   
         </item-content>        
      </ListItem>
      <ListItem title="saynaci ">
        <item-content>
          <item-inner>
<Icon slot="media" md="material:call_made"></Icon>       
          </item-inner>   
         </item-content>        
      </ListItem>
      <ListItem title="ravci ">
        <item-content>
          <item-inner>
<Icon slot="media" md="material:call_made"></Icon>       
          </item-inner>   
         </item-content>        
      </ListItem>
    </List>
  </Page>
);