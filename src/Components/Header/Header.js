import {
  Button,
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import React from 'react';
import { useState } from 'react';
import { ButtonHeader, HeadContainer, TextHeader } from './Header.styles';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeadContainer>
      {/* <Logo title="foto" src="https://img.icons8.com/color/48/000000/starbucks.png" alt="foto"></Logo> */}
      <div className="header">
        <div className="nav-bar">
          <div className="header-logo">
            <a href="#">
              <img src="https://img.icons8.com/color/62/000000/starbucks.png" />
            </a>
          </div>
          <div className="columns">
            <div className="left-col">
              <ul>
                <li>
                  <TextHeader href="#">Menu</TextHeader>
                </li>
                <li>
                  <TextHeader href="#">Rewards</TextHeader>
                </li>
                <li>
                  <TextHeader href="#">Gift Cards</TextHeader>
                </li>
              </ul>
            </div>
            <div className="right-col">
              <ul>
                {/* <li><TextHeader href='#'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg> Find a store </TextHeader></li> */}
                <li>
                  <ButtonHeader
                    backgroundColor="white"
                    hoverColor="lightgrey"
                    color="black"
                    href="#"
                  >
                    Sign in
                  </ButtonHeader>
                </li>
                <li>
                  <ButtonHeader
                    backgroundColor="black"
                    hoverColor="#4D4D52"
                    color="white"
                    href="#"
                  >
                    Join now
                  </ButtonHeader>
                </li>
              </ul>
            </div>
            <div className="mobile-drawer">
              <Button onClick={() => setOpen(true)}>
                <FormatAlignJustifyIcon />
              </Button>
              <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                // onOpen{() => ()}
              >
                <div>
                  <List>
                    <ListItem>
                      <ListItemText primary={'Menu'}> </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={'Rewards'}> </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={'Gift Cards'}> </ListItemText>
                    </ListItem>
                  </List>
                  <Divider />
                  <List>
                    <ListItem>
                      <Button>Join now</Button>
                    </ListItem>
                    <ListItem>
                      <Button>Sign in</Button>
                    </ListItem>
                    <ListItem>
                      <Button>Find a store </Button>
                    </ListItem>
                  </List>
                </div>
              </SwipeableDrawer>
            </div>
          </div>
        </div>
      </div>
    </HeadContainer>
  );
};

export default Header;
