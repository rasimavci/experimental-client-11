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
  Actions,
  ActionsButton,
  // ActionsGroup,
  ActionsLabel,
  Block,
  Button
} from 'framework7-react';



export default class extends React.Component {
  openPopupLanguage() {
      console.log('deneme')
        //this.$f7.popup.open(popupLanguage, true)
  }

  openActionsPopover() {
    const app = this.$f7;

    if (!this.actionsToPopover) {
      this.actionsToPopover = app.actions.create({
        buttons: [
          {
            text: 'Select the language',
            label: true,
          },
          {
            text: 'English',
            bold: true,
          },
          {
            text: 'Spanish',
          },
          {
            text: 'Cancel',
            color: 'red',
          },
        ],
        // Need to specify popover target
        targetEl: this.buttonToPopoverWrapper.querySelector('.button-to-popover'),
      });
    }

    // Open
    this.actionsToPopover.open();
  }

    render () {
    return (

        <Page>
        <Navbar>
      <NavLeft>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="left"></Link>
      </NavLeft>
      <NavTitle>Settings</NavTitle>
      <NavRight>
        <Link iconIfIos="f7:menu" iconIfMd="material:menu" panelOpen="right"></Link>
      </NavRight>
    </Navbar>

    <BlockTitle>Settings</BlockTitle>
    <List>
      <ListItem onClick={this.openActionsPopover.bind(this)} title="Language Settings"></ListItem>
      <ListItem title="Vibration Settings" sheetOpen=".my-sheet" href="#"></ListItem>
      <ListItem link="/tabbar/" title="Log Settings"></ListItem>
      <ListItem link="/contact/" title="Service Settings"></ListItem>
      <ListItem popupOpen="popupLanguage" title="Boost Settings"></ListItem>
      <ListItem link="/form/" title="Calling Mode Wifi"></ListItem>
      <ListItem link="/tabbar/" title="Calling Mode Cellular"></ListItem>
      <ListItem link="/contact/" title="My MObile Phone"></ListItem>      
    </List>




      <Popup id="popupLanguage">
        <View>
          <Page>
            <Navbar title="Language Settings">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
   <BlockTitle>Vibration Settings</BlockTitle>
    <List form>
        {Array.from(Array(3).keys()).map(n => (
            <ListItem key={n} checkbox name="my-checkbox" value={n} title={`Checkbox ${n}`} />
        ))}
    </List>

    <BlockTitle>Radio buttons group</BlockTitle>
    <List form>
        {Array.from(Array(3).keys()).map(n => (
            <ListItem key={n} radio name="my-radio" checked={n === 1} value={n} title={`Radio ${n}`} />    
        ))}
    </List>
          </Page>
        </View>
      </Popup>

<BlockTitle>Action Sheet To Popover</BlockTitle>
        <Block strong>
          <p ref={e => this.buttonToPopoverWrapper = e}>
            Action Sheet can be automatically converted to Popover (for tablets). This button will open Popover on tablets and Action Sheet on phones:
            <Button
              style={{ display: 'inline-block' }}
              className="button-to-popover"
              onClick={this.openActionsPopover.bind(this)}>
                Actions
              </Button>
          </p>
        </Block>
        
        <Actions ref="actionsOneGroup">
            <ActionsLabel>Do something</ActionsLabel>
            <ActionsButton bold>Button 1</ActionsButton>
            <ActionsButton>Button 2</ActionsButton>
            <ActionsButton color="red">Cancel</ActionsButton>
        </Actions>

  <div className="sheet-modal my-sheet">
    <div className="toolbar">
      <div className="toolbar-inner">
        <div className="left"></div>
        <div className="right"><Link sheetClose>Close</Link></div>
      </div>
    </div>
    <div className="sheet-modal-inner">
      <div className="block">
        <h4>Info</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>
      </div>
    </div>
  </div>

  </Page>
    );
  }
};
