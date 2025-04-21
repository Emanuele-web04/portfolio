import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Apps from "@/components/Apps";
const Home = () => {
  return (
    <div className="m-auto overflow-hidden">
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Apps />
      </Suspense>
    </div>
  )
};

export default Home;
