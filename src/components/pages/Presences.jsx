import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Popup,
  View,
  Link,
  List,
  ListItem,
  BlockTitle,
  Block,
  Row,
  Button,
  Input
} from 'framework7-react';

import PresenceConnected from '../../assets/icon/presence_connected.png';
import PresenceClosed from '../../assets/icon/presence_not.png';
import PresenceClosedMessage from '../../assets/icon/presence_away.png';
import PresenceOffline from '../../assets/icon/presence_offline.png';


export default class extends React.Component {
  openPopupLanguage() {
      console.log('deneme')
        //this.$f7.popup.open(popup, true)
  }

    render () {
    return (

        <Page>
        <Navbar>
      <NavLeft>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="left"></Link>
      </NavLeft>
      <NavTitle>Presences</NavTitle>
      <NavRight>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="right"></Link>
      </NavRight>
    </Navbar>

    <BlockTitle>Settings</BlockTitle>
    <List mediaList>
      <ListItem media={PresenceConnected} key={1} radio name="my-radio" checked={true} value={1} title={`Available`} />
      <ListItem media={PresenceClosed} key={2} radio name="my-radio" checked={2 === 1} value={2} title={`Busy`} /> 
      <ListItem media={PresenceClosed} key={3} radio name="my-radio" checked={3 === 1} value={3} title={`On Vacation`} /> 
      <ListItem media={PresenceClosedMessage} key={4} radio name="my-radio" checked={4 === 1} value={4} title={`Away`} /> 
      <ListItem media={PresenceClosedMessage} key={2} radio name="my-radio" checked={2 === 1} value={2} title={`Out to Lunch`} /> 
      <ListItem media={PresenceClosedMessage} key={3} radio name="my-radio" checked={3 === 1} value={3} title={`Be Right Back`} /> 
      <ListItem media={PresenceOffline} key={4} radio name="my-radio" checked={4 === 1} value={4} title={`Appear Offline`} />    
    </List>

    <BlockTitle>Buttons</BlockTitle>
    <Block strong>
      <Row tag="p">
        <Button className="col" raised fill onClick={this.about.bind(this)}>About</Button>
      </Row>
      <Row tag="p">
        <Button className="col" raised fill onClick={this.doLogout.bind(this)}>Logout</Button>
      </Row>
      <Row tag="p">
        <Button className="col" raised fill popupOpen="#popup">Send Logs via Email</Button>
      </Row>
      <Row tag="p">
        <Button className="col" raised fill>Link To Privacy Policy</Button>
      </Row>      
    </Block>

      <Popup id="popup">
        <View>
          <Page>
            <Navbar title="Send Feedback">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
            <BlockTitle>Issue Description</BlockTitle>
            </Block>
            <Input type="textarea" resizable placeholder="Enter your feedback"></Input>
            <Button className="col" raised fill>SEND FEEDBACK</Button>
          </Page>
        </View>
      </Popup>

  </Page>
    );
  }
    about() {
       this.$f7.dialog.alert('Version 4.0', 'Smart Office', false)
    }

    doLogout() {
    //   this.$store.commit('SET_ISCONNECTED', false);
    //   this.$store.commit('SET_LOGOUT', true);
    //   this.$store.dispatch('disconnect');
       let vm = this;
    //   this.$f7.preloader.show();
      setTimeout(() => {
        vm.$f7.preloader.hide();
        vm.$f7router.navigate('/login/');
      }, 2000);
    }
};
