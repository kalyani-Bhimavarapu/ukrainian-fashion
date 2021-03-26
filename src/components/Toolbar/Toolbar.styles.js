import { fade } from "@material-ui/core/styles/colorManipulator";
import { drawerWidthMultiplier } from "../../utils/constants";

const styles = ({
  zIndex,
  transitions,
  breakpoints,
  shape,
  palette,
  spacing
}) => ({
  appBar: {
    zIndex: zIndex.drawer + 1,
    transition: transitions.create(["width", "margin"], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: spacing.unit * drawerWidthMultiplier,
    width: `calc(100% - ${spacing.unit * drawerWidthMultiplier}px)`,
    transition: transitions.create(["width", "margin"], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [breakpoints.up("sm")]: {
      display: "block"
    }
  },

  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: spacing.unit,
    paddingRight: spacing.unit,
    paddingBottom: spacing.unit,
    paddingLeft: spacing.unit * 10,
    transition: transitions.create("width"),
    width: "100%",
    [breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [breakpoints.up("md")]: {
      display: "none"
    }
  }
});

export default styles;
