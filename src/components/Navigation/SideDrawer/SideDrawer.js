import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./sidedrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Bux from "../../../hoc/Bux/Bux";
const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open){
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Bux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div>
          <Logo className={classes.Logo} />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Bux>
  );
};

export default sideDrawer;
