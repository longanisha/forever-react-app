import React from 'react'
import  Header  from "../../components/Header";
import { RouteWithSubRoutes } from "../../utils";
import { Redirect,Switch } from "react-router-dom";
import  routes  from "../../router";
export default function App() {
    return (
        <div>
          <Header></Header>
          <Switch>
            {
              routes.map((route,i)=>(
                <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
              ))
            }
          
          </Switch>
        </div>
    )
}
