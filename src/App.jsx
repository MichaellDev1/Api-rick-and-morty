import React, { useEffect, useState } from "react";
import { Route } from "wouter";
import Home from "./Page/Home/Home";
import Character from "./Page/Character/Character";
import Episode from "./Page/Episode/Episode";
import Location from "./Page/Location/Location";
import Header from "./Components/Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <Route component={Home} path={"/"} />
      <Route path="/character" component={Character} />
      <Route path="/location" component={Location} />
      <Route path="/episode" component={Episode} />
    </>
  );
}
