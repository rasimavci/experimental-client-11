import React from 'react';
import { Navbar, Page, Toolbar, List, ListItem, Link, Icon } from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbarBottom: false,
    }
  }
  render() {
    return (
      <Page ref="el">
        <Navbar title="Toolbar & Tabbar" backLink="Back"></Navbar>
        <Toolbar bottomMd>
          <Link>
          <Icon md="material:person_add"></Icon></Link>
          <Link>
          <Icon md="material:volume_up"></Icon></Link>          
          <Link>
          <Icon md="material:phone_paused"></Icon></Link>
          <Link>
          <Icon md="material:mic_off"></Icon></Link>
        </Toolbar>
        <List>
          <ListItem link="./tabbar/" title="Tabbar"></ListItem>
          <ListItem link="./tabbar-labels/" title="Tabbar With Labels"></ListItem>
          <ListItem link="./tabbar-scrollable/" title="Tabbar Scrollable"></ListItem>
          <ListItem link="./toolbar-hide-scroll/" title="Hide Toolbar On Scroll"></ListItem>
        </List>
      </Page>
    )
  }
};