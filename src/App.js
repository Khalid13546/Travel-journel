import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Travelinfo from "./travelinfo";
import info from "./info";
import Personal from "./personal";

function App() {
  const journey = info.map((props) => {
    return (
      <Travelinfo
        key={props.id}
        title={props.title}
        location={props.location}
        startDate={props.startDate}
        endDate={props.endDate}
        description={props.description}
        imageUrl={props.imageUrl}
        like={props.like}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Personal />
      <section>{journey}</section>
    </div>
  );
}

export default App;
