import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import {
  AccessTime,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title={"Inbox"} number={51} selected={true} />
      <SidebarOption Icon={Star} title={"Starred"} number={18} />
      <SidebarOption Icon={AccessTime} title={"Snoozed"} number={9} />
      <SidebarOption Icon={LabelImportant} title={"Important"} number={18} />
      <SidebarOption Icon={NearMe} title={"Sent"} number={7} />
      <SidebarOption Icon={Note} title={"Drafts"} number={24} />
      <SidebarOption Icon={ExpandMore} title={"More"} number={15} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcon">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
