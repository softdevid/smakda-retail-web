import Main from "@/Components/Guru/Main";
import Input from "@/Components/Input";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";

const Rincian = (props) => {


  const handleClick = () => {
    window.open(`/print-rincian/${props.dataGuru.nik}`, '_blank', 'height=600,width=700');
  };


  //untuk print data
  function handlePrintOtherPage() {
    const newWindow = window.open(`/print-rincian/${props.dataGuru.nik}`);
    newWindow.onafterprint = () => {
      newWindow.focus();
      newWindow.close();
    };
    newWindow.onload = () => {
      newWindow.print();
    };
  }


  return (
    <>
      {/* <div className="container mx-auto my-4" ref={divRef} id="print-content"> */}

      <div className="container mx-auto my-4" id="print-content">
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Rincian Data</h1>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <div className="max-w-5xl bg-white p-4 rounded-lg overflow-hidden my-4">
            <div className="py-4 px-6">
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">NIK : {props.dataGuru.nik}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Nama : {props.dataGuru.nama}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <p className="px-2 text-lg">Alamat : {props.dataGuru.alamat}</p>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Jabatan : {props.dataGuru.jabatan}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Jenis Kelamin : {props.dataGuru.jenisKelamin}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Sisa Saldo : {props.dataGuru.sisaSaldo}</h1>

              </div>
            </div>
            <div>
              &nbsp;
              <Link
                href="/"
                type="button"
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Kembali
              </Link>
              &nbsp;
              <button
                // href="/print"
                type="button" onClick={handlePrintOtherPage}
                className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              >
                Lanjut Print
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* <iframe id="print-frame" style={{display: 'none'}}></iframe> */}
    </>
  );
};
Rincian.layout = (page) => <Main children={page} />;

export default Rincian;
