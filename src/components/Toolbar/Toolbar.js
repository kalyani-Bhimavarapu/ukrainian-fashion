import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Input,
  Badge
} from "@material-ui/core";
import {
  Menu,
  Search,
  Notifications,
  More,
  Store,
  ExitToApp
} from "@material-ui/icons";

import styles from "./Toolbar.styles";

const AppToolbar = ({
  classes,
  isMenuOpen,
  open,
  isTop,
  handleDrawerState,
  handleProfileMenuOpen,
  handleMobileMenuOpen,
  handleLogout,
  changeTheme,
  children
}) => (
  <AppBar
    position="absolute"
    className={classNames(classes.appBar, open && classes.appBarShift)}
    style={{ backgroundColor: "transparent" }}
  >
    <Toolbar disableGutters={!open}>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={handleDrawerState}
        className={classNames(classes.menuButton, open && classes.hide)}
      >
        <Menu />
      </IconButton>
      <Typography className={classes.title} variant="h6" color="inherit" noWrap>
        React Material Dashboard
      </Typography>

      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <IconButton color="black">
          <Badge
            className={classes.margin}
            badgeContent={87}
            color="secondary"
            //            style={{border: "1px  solid black"}}
          >
            <Notifications />
          </Badge>
        </IconButton>

        <IconButton
          aria-owns={isMenuOpen ? "material-appbar" : null}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="black"
          //  style={{border: "1px  solid black"}}
        >
          <Store />
        </IconButton>
        <IconButton
          onClick={handleLogout}
          color="black"
          //style={{border: "1px  solid black"}}
        >
          <ExitToApp />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="black"
        >
          <More label="Logout" />
        </IconButton>
      </div>
    </Toolbar>
    {children}
  </AppBar>
);

export default withStyles(styles)(AppToolbar);
