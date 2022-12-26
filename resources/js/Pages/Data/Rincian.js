import Main from "@/Components/Guru/Main";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Rincian = (props) => {
  return (
    <>
      <div className="container mx-auto my-4">
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Rincian Data</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-5xl bg-white p-4 shadow-lg rounded-lg overflow-hidden my-4">
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
                <h1 className="px-2 text-lg">Saldo : {props.dataGuru.sisaSaldo}</h1>
              </div>
            </div>
            {/* <Link
              href="/"
              type="button" data-modal-toggle="defaultModal"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cek Saldo
            </Link> */}
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="large-modal">
              Cek saldo
            </button>
            &nbsp;
            <Link
              href="/"
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Kembali
            </Link>
            &nbsp;
            <Link
              href="/print"
              type="button"
              className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
            >
              Print
            </Link>
          </div>
        </div>
      </div>





      <div id="large-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div className="relative w-full h-full max-w-4xl md:h-auto">

          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Large modal
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="large-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-toggle="large-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
              <button data-modal-toggle="large-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};
Rincian.layout = (page) => <Main children={page} />;

export default Rincian;
