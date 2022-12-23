import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "./Navbar";

const Main = (props) => {
  // console.log(props);
  return (
    <>
      <Head title={props.title} />
      <Navbar />
      <div className="container mx-auto my-4">{props.children}</div>
    </>
  );
};

export default Main;
