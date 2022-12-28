import Main from "@/Components/Guru/Main";
import Input from "@/Components/Input";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";

const Rincian = (props) => {
  const [bulan, setBulan] = useState("");
  const [tahun, setTahun] = useState("");

  // const handleSubmitBulan = (e) => {
  //   e.preventDefault();

<<<<<<< HEAD
    const data = {
      bulan,
      nik: props.dataGuru.nik,
    };
    console.log(data);

    Inertia.get(`/cek-saldo/bulan/${props.dataGuru.nik}/${bulan}`, data);
  };

  const divRef = useRef(null);
  const buttonsRef = useRef([]);

  // useEffect(() => {
  //   const hideButtons = () => {
  //     buttonsRef.current.forEach(button => {
  //       button.style.display = 'none';
  //     });
=======
  //   const data = {
  //     bulan, nik: props.dataGuru.nik
>>>>>>> 19b9dd9 (/)
  //   }
  //   console.log(data);

<<<<<<< HEAD
  const addButton = (button) => {
    buttonsRef.current.push(button);
  };

  const printDiv = () => {
    window.print(divRef.current);
  };
=======
  //   Inertia.get(`/cek-saldo/bulan/${props.dataGuru.nik}/${bulan}`, data);

  // }
>>>>>>> 19b9dd9 (/)


  const handleClick = () => {
    window.open(`/print-rincian/${props.dataGuru.nik}`, '_blank', 'height=600,width=700');    
  };

  window.onbeforeprint = function () {
    console.log('Mulai mencetak halaman...');
  };

  window.onafterprint = function () {
    console.log('Selesai mencetak halaman. Menutup tab...');
    window.close();
  };


  return (
    <>
      {/* <div className="container mx-auto my-4" ref={divRef} id="print-content"> */}
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="container mx-auto my-4" id="print-content">
            <div className="text-center font-bold mx-auto my-4 text-2xl">
              <h1>Rincian Data</h1>
            </div>
            <div className="flex justify-center items-center">
              <div className="max-w-5xl bg-white p-4 rounded-lg overflow-hidden my-4">
                <div className="py-4 px-6">
                  <div className="flex items-center mt-4 text-gray-700">
                    <h1 className="px-2 text-lg">NIK : {props.dataGuru.nik}</h1>
                  </div>
                  <div className="flex items-center mt-4 text-gray-700">
                    <h1 className="px-2 text-lg">
                      Nama : {props.dataGuru.nama}
                    </h1>
                  </div>
                  <div className="flex items-center mt-4 text-gray-700">
                    <p className="px-2 text-lg">
                      Alamat : {props.dataGuru.alamat}
                    </p>
                  </div>
                  <div className="flex items-center mt-4 text-gray-700">
                    <h1 className="px-2 text-lg">
                      Jabatan : {props.dataGuru.jabatan}
                    </h1>
                  </div>
                  <div className="flex items-center mt-4 text-gray-700">
                    <h1 className="px-2 text-lg">
                      Jenis Kelamin : {props.dataGuru.jenisKelamin}
                    </h1>
                  </div>
                  <div className="flex items-center mt-4 text-gray-700">
                    <h1 className="px-2 text-lg">
                      Saldo : {props.dataGuru.sisaSaldo}
                    </h1>
                  </div>
                </div>
                {/* <Link
              href="/"
              type="button" data-modal-toggle="defaultModal"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cek Saldo
            </Link> */}
                <div>
                  <button
                    ref={addButton}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    data-modal-toggle="large-modal"
                  >
                    Cek saldo
                  </button>
                  &nbsp;
                  <Link
                    ref={addButton}
                    href="/"
                    type="button"
                    className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Kembali
                  </Link>
                  &nbsp;
                  <button
                    ref={addButton}
                    // href="/print"
                    type="button"
                    onClick={printDiv}
                    className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
                  >
                    Print
                  </button>
                </div>
=======

      <div className="container mx-auto my-4" id="print-content">
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Rincian Data</h1>
        </div>
        <div className="flex justify-center items-center">
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
>>>>>>> 19b9dd9 (/)
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
                type="button" onClick={handleClick}
                className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              >
                Lanjut Print
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        <div className="grid-cols-1 grid gap-4">
          <div>
            <form onSubmit={handleSubmitBulan}>
              <label>Menurut bulan</label>
              <input
                type="month"
                id="month"
                onChange={(bulan) => setBulan(bulan.target.value)}
              />
              <button
                type="submit"
                className="bg-sky-500 text-white p-2 mt-3 rounded-md"
              >
                Cek saldo
              </button>
            </form>
          </div>
          <div>
            <label>Menurut Tahun</label>
            {/* <Input type="year" className="w-full" />
             */}
            <Link className="bg-sky-500 text-white p-2 mt-3 rounded-md">
              Cek saldo
            </Link>
          </div>
        </div>
=======
>>>>>>> 19b9dd9 (/)
      </div>


      {/* <iframe id="print-frame" style={{display: 'none'}}></iframe> */}
    </>
  );
};
Rincian.layout = (page) => <Main children={page} />;

export default Rincian;
