import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AppsOutlined,
  ArrowDropDown,
  Notifications,
  SearchOutlined,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectuser } from "../features/userSlice";
import { auth } from "../config/firebase";

const Header = () => {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  const signout = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sociogram-world.appspot.com/o/gmail.png?alt=media&token=3803d70b-da1f-436d-adc1-5e6d9ac0362e"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchOutlined />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsOutlined />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar onClick={signout} src={user?.photoUrl} alt="" />
      </div>
    </div>
  );
};

export default Header;
