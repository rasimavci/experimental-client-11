import React from 'react';
import { Page, Navbar, List, ListItem, Icon } from 'framework7-react';
import NoImg from '../../assets/demo/noimage1.jpg';

export default () => (
  <Page>
    <Navbar title="ravci"/>
    <ListItem link="/presences/" panelClose>
    <img alt="" slot="media" src={NoImg} width="44"/></ListItem>
    
    <List medialist no-hairlines-between="">
      <ListItem link="/login/" title="Login" panelClose></ListItem>
      <ListItem link="/call/" title="Call" panelClose></ListItem>
      <ListItem link="/favorites/" title="Favorites" panelClose>
      <Icon slot="media" md="material:star_border"></Icon>  </ListItem>
      <ListItem link="/history/" title="History" panelClose>
      <Icon slot="media" md="material:access_time"></Icon></ListItem>
      <ListItem link="/message/" title="Inbox" panelClose>
      <Icon slot="media" md="material:inbox_fill"></Icon></ListItem>   
      <ListItem link="/dialpad/" title="Dialpad" panelClose>
      <Icon slot="media" md="material:phone"></Icon></ListItem>
      <ListItem link="/sessions/" title="Sessions" panelClose>
      <Icon slot="media" md="material:content_copy"></Icon></ListItem>         
      <ListItem link="/conference/" title="Conference" panelClose>
      <Icon slot="media" md="material:supervisor_account"></Icon></ListItem>
      <ListItem link="/settings/" title="Settings" panelClose>
      <Icon slot="media" md="material:settings"></Icon></ListItem>
      <ListItem link="/contact/" title="Contact" panelClose>
      <Icon slot="media" md="material:contacts"></Icon></ListItem>
      {/*<ListItem link="/about/" title="About" panelClose></ListItem>
      <ListItem link="/form/" title="Form" panelClose></ListItem>      
      <ListItem link="/actionsheet/" title="Action Sheet" panelClose></ListItem>      
      <ListItem link="/" title="Home" panelClose></ListItem>*/}
    </List>
  </Page>
);
