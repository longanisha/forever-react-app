import React from "react";
import { NavBar,Icon } from "antd-mobile";
function Header() {
  return (
    <div className="App">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log("onLeftClick")}
        rightContent={[
         
          "Select",
        ]}
      >
        NavBar
      </NavBar>
    </div>
  );
}

export default Header;
