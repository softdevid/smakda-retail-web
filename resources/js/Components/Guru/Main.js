import React from "react";
import Navbar from "./Navbar";

const Main = (props) => {
    return (
        <>
            <head>
                <title>{{ $title }}</title>
            </head>
            <body>
                <Navbar />
                <div className="container mx-auto my-auto">
                    {props.children}
                </div>
            </body>
        </>
    );
};

export default Main;
