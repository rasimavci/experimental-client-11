import React from 'react';
import { Toolbar, Button, View, Block, BlockTitle, Popup, Navbar, Page, Searchbar, Subnavbar, List, ListItem,   NavLeft,  NavTitle,  NavRight,  Link, Icon } from 'framework7-react';
// import NoImg from '../../assets/demo/noimage1.jpg';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Rasim Avci',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
          lastMessage: 'hi'
        },
        {
          name: 'Albert Bernard',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
          lastMessage: 'hello'
        },
        {
          name: 'Kate Johnson',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
          lastMessage: 'hi there'
        },
        {
          name: 'Andrew Schmidt',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
          lastMessage: 'hurry up!'
        },
                 
      ],
      responseInProgress: false,      
    }
  }
  goCallPage() {
      console.log('go call page')
      this.$f7router.navigate('/call/');
        //this.$f7.popup.close(popupReply, true)
  }

  render() {
    return (
      <Page pageContent={false} ref="el">
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
      <NavTitle>Inbox</NavTitle>
      <NavRight>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="right"></Link>
      </NavRight> 

    </Navbar>

<Block>
</Block>
<Block>
</Block>
<Block>
</Block>
    <List className="searchbar-not-found">
      <ListItem title="Nothing found"></ListItem>
    </List>
    <List className="search-list searchbar-found">
              {this.state.people.map((man, index) => (
            <ListItem key={index} title={man.name} after={man.lastMessage}>
                <img className="avatar-circle" alt="" slot="media" src={man.photoUrl} width="44"/>
            </ListItem>
          ))}
</List>
<Button className="col" popupOpen="#popupReply" >Deneme</Button>

      <Popup id="popupReply">
        <View>
          <Page>
            <Navbar title="Inbox">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
    <BlockTitle>Inbox</BlockTitle>
        <Toolbar bottomMd={true}>
          <Link>
          <Icon md="material:delete"></Icon></Link>
          <Link onClick={this.goCallPage.bind(this)}>
          <Icon md="material:reply"></Icon></Link>          
        </Toolbar>
          </Page>
        </View>
      </Popup>
      </Page>
    );
  }



};