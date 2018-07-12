import React from 'react';
import { Page, Navbar, BlockTitle, List, ListItem } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="" sliding />
    <BlockTitle>Contacts</BlockTitle>
    <List>
      <ListItem title="Manage"></ListItem>
      <ListItem title="Sort By Last Name"></ListItem>
      <ListItem title="Sort By Last Name"></ListItem>
      <ListItem title="Personal Addressbook"></ListItem>      
      <ListItem title="Global Addressbook"></ListItem>      
    </List>
    <BlockTitle>History</BlockTitle>
    <List>
      <ListItem  title="Incoming Call" view="#main-view" panelClose></ListItem>
      <ListItem  title="Outgoing Call" view="#main-view" panelClose></ListItem>
      <ListItem  title="Missed Call" view="#main-view" panelClose></ListItem>
      <ListItem  title="Instant Messages" view="#main-view" panelClose></ListItem>
      <ListItem  title="Conference" view="#main-view" panelClose></ListItem>
    </List>
  </Page>
);
