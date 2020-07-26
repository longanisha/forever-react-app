import React, { Component } from "react";
import { List } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;
export default class ListItem extends Component {
  state = {
    disabled: false,
  };
  render() {
    return (
      <div>
      
        <List renderHeader={() => "Subtitle"} className="my-list">
          
        
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => {}}
          >
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        <List renderHeader={() => "Subtitle"} className="my-list">
          
        
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => {}}
          >
            Title <Brief>subtitle</Brief>
          </Item>
        </List><List renderHeader={() => "Subtitle"} className="my-list">
          
        
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => {}}
          >
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
      </div>
    );
  }
}
