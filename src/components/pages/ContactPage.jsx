import React from 'react';
import { View, Toggle, Range, Block, BlockTitle, Popup, Label, Input, Navbar, Page, Searchbar, Subnavbar, List, ListItem,   NavLeft,  NavTitle,  NavRight,  Link } from 'framework7-react';
// import NoImg from '../../assets/demo/noimage1.jpg';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Rasim Avci',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Albert Bernard',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Kate Johnson',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Andrew Schmidt',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Rasim Avci',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Albert Bernard',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Kate Johnson',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Andrew Schmidt',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },    
        {
          name: 'Rasim Avci',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Albert Bernard',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Kate Johnson',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Andrew Schmidt',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Rasim Avci',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Albert Bernard',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Kate Johnson',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },
        {
          name: 'Andrew Schmidt',
          photoUrl: 'http://pa-ucc.genband.com:80/pa/direct/pictureServlet?user=ravci@genband.com',
        },                   
      ],
      responseInProgress: false,      
    }
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
      <NavTitle>Contacts</NavTitle>
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
            <ListItem key={index} title={man.name}>
                <img class="avatar-circle" alt="" slot="media" src={man.photoUrl} width="44"/>
            </ListItem>
          ))}
</List>

      <Popup id="popup">
        <View>
          <Page>
            <Navbar title="Contact Details">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
    <BlockTitle>Form Example</BlockTitle>
    <List form>
      <ListItem>
        <Label>Name</Label>
        <Input type="text" placeholder="Name" />
      </ListItem>
      <ListItem>
        <Label>E-mail</Label>
        <Input type="email" placeholder="E-mail" />
      </ListItem>
      <ListItem>
        <Label>URL</Label>
        <Input type="url" placeholder="URL" />
      </ListItem>
      <ListItem>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </ListItem>
      <ListItem>
        <Label>Phone</Label>
        <Input type="tel" placeholder="Phone" />
      </ListItem>
      <ListItem>
        <Label>Gender</Label>
        <Input type="select">
          <option selected>Male</option>
          <option>Female</option>
        </Input>
      </ListItem>
      <ListItem>
        <Label>Birth date</Label>
        <Input type="date" placeholder="Birth date" value="2014-04-30" />
      </ListItem>
      <ListItem title="Toggle">
        <Toggle slot="after" />
      </ListItem>
      <ListItem>
        <Label>Slider</Label>
        <Input>
          <Range min="0" max="100" value="50" step="1" label={true} />
        </Input>
      </ListItem>
      <ListItem>
        <Label>Textarea</Label>
        <Input type="textarea" placeholder="Bio"></Input>
      </ListItem>
      <ListItem>
        <Label>Resizable</Label>
        <Input type="textarea" placeholder="Bio" resizable></Input>
      </ListItem>
    </List>
          </Page>
        </View>
      </Popup>
      </Page>
    );
  }



};