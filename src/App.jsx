import React from "react";
import { OwnCardComponent } from "./components/OwnCardComponent";
import { MultiViewPort } from "./components/MultiViewPort";
import { SideBar } from "./components/SideBar";
import { LayoutDesign } from "./components/LayoutDesign";
import { Navbar } from "./components/Navbar";
import { GlassMorphism } from "./components/GlassMorphism";

export const App = () => {
  return (
    <div className="h-screen bg-red-400">
      {/* <SideBar /> */}
      {/* <LayoutDesign /> */}
      {/* <Navbar /> */}
      <GlassMorphism />
    </div>
  );
};
