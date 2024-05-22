import React from "react";
import { OwnCardComponent } from "./components/OwnCardComponent";
import { MultiViewPort } from "./components/MultiViewPort";
import { SideBar } from "./components/SideBar";
import { LayoutDesign } from "./components/LayoutDesign";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div className="h-screen bg-red-400">
      {/* <SideBar /> */}
      {/* <LayoutDesign /> */}
      <Navbar />
    </div>
  );
};
