import React from "react";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="grid lg:grid-cols-5">
      <Navbar />
      <main className="lg:col-span-4 p-12">
        <Buttons />
        <p className="mt-10 text-[#A9A9A9] ">
          created by{" "}
          <a
            href="https://twitter.com/xoluwaseyi"
            className="font-bold underline"
          >
            Oluwaseyi
          </a>{" "}
          - devChallenges.io
        </p>
      </main>
    </div>
  );
};

export default App;
