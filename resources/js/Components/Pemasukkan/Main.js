import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "./Navbar";

const Main = (props) => {
    // console.log(props);
    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <div className="text-center font-bold mx-auto my-4 text-2xl">
                <h1>Data Pemasukkan</h1>
            </div>
            <div className="container mx-auto my-4">{props.children}</div>
        </>
    );
};

export default Main;
