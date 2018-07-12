import React from 'react';
// import DialPad from 'frh-react-dial-pad'
// import Dial from './Dial'
// import Framework7Keypad from 'framework7-plugin-keypad';

import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Toolbar,
  Link,
  Icon
} from 'framework7-react';



export default class extends React.Component {
  startChat() {
      console.log('start chat')
      console.log(this.$f7.keypad.get('callee'))
        //this.$f7.popup.open(popup, true)
  }

  goCall() {
      console.log('go call page')
      
      this.$f7router.navigate('/call/');
        //this.$f7.popup.open(popup, true)
  }

  


    render () {
    return (
        <Page>
        <Navbar>
      <NavLeft>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="left"></Link>
      </NavLeft>
      <NavTitle>Dialpad</NavTitle>
      <NavRight>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="right"></Link>
      </NavRight>
    </Navbar>

<input id="myKeypad.value" type="numpad"></input>

        <Toolbar bottomMd="true">
          <Link onClick={this.startChat.bind(this)}>
          <Icon md="material:chat_bubble"></Icon></Link>
          <Link onClick={this.goCall.bind(this)}>
          <Icon md="material:phone"></Icon></Link>          
          <Link onClick={this.goCall.bind(this)}>
          <Icon md="material:videocam"></Icon></Link>
          <Link>
          <Icon md="material:voicemail"></Icon></Link>
        </Toolbar>


  </Page>
    );
  }
};
