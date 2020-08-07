import React from "react";
import "./SidebarOption.css";
import { useDataLayerValue } from "./DataLayer";

function SidebarOption({ title, Icon, playlist, spotify }) {
  // eslint-disable-next-line
  const [{}, dispatch] = useDataLayerValue();

  const handleClick = () => {
    if (!playlist) {
      return;
    }
    console.log(" >>>>> Handle CLick : ", playlist.id);

    spotify.getPlaylist(playlist.id).then((response) => {
      console.log("REsponse : ", response);
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  };

  return (
    <div onClick={handleClick} className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
