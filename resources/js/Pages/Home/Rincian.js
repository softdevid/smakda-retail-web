import Main from "@/Components/Guru/Main";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Rincian = () => {
  return (
    <>
      <div className="container mx-auto my-4">
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Rincian Data</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-lg bg-white p-4 shadow-lg rounded-lg overflow-hidden my-4">
            <div className="py-4 px-6">
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Nama :</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <p className="px-2 text-lg">Alamat :</p>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">NIK :</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Jabatan :</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Jenis Kelamin :</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Saldo :</h1>
              </div>
            </div>
            <Link
              href="/"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Kembali
            </Link>
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
    </>
  );
};
Rincian.layout = (page) => <Main children={page} />;

export default Rincian;
