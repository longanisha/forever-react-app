import React, { Component } from "react";
import { SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";
import ListItem  from "../../components/ListItem";

export default class Search extends Component {
  state = {
    value: "美食",
  };

  onChange = (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: "" });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  };
  render() {
    return (
      <div>
        <SearchBar
          placeholder="Search"
          onSubmit={(value) => console.log(value, "onSubmit")}
          onClear={(value) => console.log(value, "onClear")}
          onFocus={() => console.log("onFocus")}
          onBlur={() => console.log("onBlur")}
          onCancel={() => console.log("onCancel")}
          showCancelButton
          onChange={this.onChange}
        />
        <ListItem></ListItem>
      </div>
    );
  }
}
