import React from "react"
import { BrowserRouter,Switch,Route,Redirect,Link} from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"

import Parcel from "single-spa-react/parcel"



export default function Root(props) {

  return  <BrowserRouter basename="/todos">
    <Parcel config={System.import("@study/parcel")} />
    <div>
      <Link to="/home">Home </Link>
      <Link to="/about">About</Link>
    </div>
    <Switch>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='/'>
        <Redirect to="/home"></Redirect>
      </Route>
    </Switch>
  </BrowserRouter>
 
}
