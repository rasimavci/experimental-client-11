import React from 'react';
import { View, Toggle, Range, BlockTitle, Popup, Label, Input, Navbar, Page, Searchbar, Subnavbar, List, ListItem,   NavLeft,  NavTitle,  NavRight,  Link } from 'framework7-react';
import NoImg from '../../assets/demo/noimage1.jpg';

export default class extends React.Component (

      list= [
        { title: true, name: 'A' },
        { name: 'Albert Bernard', avatar: images[0] },
        { name: 'Amy Richard', avatar: images[1] },
        { name: 'Andrew Schmidt', avatar: images[2] },
        { title: true, name: 'B' },
        { name: 'Bob Jackson', avatar: images[3] },
        { name: 'Bom', avatar: images[4] },
        { name: 'BaBa', avatar: images[5] },
        { name: 'Bilibili', avatar: images[6] },
        { title: true, name: 'L' },
        { name: 'Linus Torvalds', avatar: images[7] },
        { title: true, name: 'T' },
        { name: 'Tom Clinton', avatar: images[8] },
        { name: 'Tim Cook', avatar: images[0] },
        { name: 'Ted', avatar: images[1] },
        { name: 'Tomato', avatar: images[2] },
        { title: true, name: 'X' },
        { name: 'Xie', avatar: images[3] },
        { name: 'Xing', avatar: images[4] },
        { name: 'Xia ran', avatar: images[5] },
        { name: 'Xue dinge', avatar: images[6] },
        { title: true, name: 'Z' },
        { name: 'Zhang xq', avatar: images[7] }
      ]

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
      <NavTitle>Contacts</NavTitle>
      <NavRight>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="right"></Link>
      </NavRight> 

    </Navbar>
    <List className="searchbar-not-found">
      <ListItem title="Nothing found"></ListItem>
    </List>
    <List className="search-list searchbar-found">
      <ListItem title="Rasim Avcı" popupOpen="#popup">
        <img class="avatar-circle" alt="" slot="media" src={NoImg} width="44"/></ListItem>
      <ListItem title="Albert Bernard"></ListItem>
      <ListItem title="Amy Richard"></ListItem>
      <ListItem title="Andrew Schmidt "></ListItem>
      <ListItem title="Bob Jackson "></ListItem>
      <ListItem title="Linus Torvalds"></ListItem>
      <ListItem title="Tom Clinton"></ListItem>
      <ListItem title="Tim Cook"></ListItem>
      <ListItem title="Xia ran "></ListItem>
      <ListItem title="Xia Dinge "></ListItem>
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