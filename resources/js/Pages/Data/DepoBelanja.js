import Main from "@/Components/Guru/Main";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";

const DepoBelanja = (props) => {

  // console.log(props);

  const [saldo, setSaldo] = useState("");
  const [belanja, setBelanja] = useState("");
  const [tanggalSaldo, setTanggalSaldo] = useState("");
  const [tanggalBelanja, setTanggalBelanja] = useState("");

  const handleSubmitDeposit = (e) => {
    e.preventDefault();
    const data = {
      saldo, tanggalSaldo, nik: props.dataKeuangan.nik
    }
    // console.log(data);
    Inertia.post("/deposit/store", data);
    setSaldo('');
    setTanggalSaldo('');
  }

  const handleSubmitBelanja = (e) => {
    e.preventDefault();

    const data = {
      belanja, tanggalBelanja, nik: props.dataKeuangan.nik
    }
    Inertia.post("/belanja/store", data);
    setBelanja('');
    setTanggalBelanja('');
    // console.log(data, props);
  }

  return (
    <>
      <div className="container mx-auto my-4">

        {props.flash.message &&
          <div className="mx-5">
            <div className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
              <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">{props.flash.message}</span>
              </div>
            </div>
          </div>
        }

        {props.flash.error &&
          <div className="mx-5">
            <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
              <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">{props.flash.error}</span>
              </div>
            </div>
          </div>
        }
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Deposit & Pengeluaran</h1>
        </div>
        <div className="m-4">
          <div className="bg-white rounded-lg grid md:grid-cols-2 p-4 gap-4">
            <div>
              <div className="flex justify-center items-center">
                <div className="max-w-sm bg-white rounded-lg overflow-hidden my-4">
                  <div className="py-4 px-6">
                    <div className="flex items-center mt-4 text-gray-700">
                      <h1 className="px-2 text-sm">Nama: {props.dataKeuangan.nama}</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700">
                      <h1 className="px-2 text-sm">NIK: {props.dataKeuangan.nik}</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700">
                      <h1 className="px-2 text-sm">Jabatan: {props.dataKeuangan.jabatan}</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700">
                      <h1 className="px-2 text-sm">Jenis Kelamin: {props.dataKeuangan.jenisKelamin}</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700">
                      <h1 className="px-2 text-sm">sisa Saldo: {props.dataKeuangan.sisaSaldo}</h1>
                    </div>
                    <div className="flex items-center mt-4 text-gray-700">
                      <h1 className="px-2 text-sm">Alamat:</h1>
                      <p>{props.dataKeuangan.alamat}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <div className="text-center font-bold mx-auto my-4 text-2xl">
                <h1>Deposit</h1>
              </div>

              {/* <form> */}
              <div className="grid gap-6 mb-6 px-4 md:grid-cols-1">
                <form onSubmit={handleSubmitDeposit}>
                  <div className="mb-2">
                    <label
                      htmlFor="saldo"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Saldo
                    </label>
                    <input
                      type="text"
                      name="saldo"
                      id="saldo"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Saldo"
                      onChange={(saldo) => setSaldo(saldo.target.value)} value={saldo}
                    />
                    {props.errors.saldo && <div className="text-red-600">{props.errors.saldo}</div>}
                  </div>
                  <div>
                    <label
                      htmlFor="tanggal"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tanggal Saldo
                    </label>
                    <input
                      type="date"
                      name="tanggalSaldo"
                      id="tanggalSaldo"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(tanggalSaldo) => setTanggalSaldo(tanggalSaldo.target.value)} value={tanggalSaldo}
                    />
                    {props.errors.tanggalSaldo && <div className="text-red-600">{props.errors.tanggalSaldo}</div>}
                  </div>
                  <button
                    type="submit" as="button"
                    className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>

                <div className="text-center font-bold mx-auto my-4 text-2xl">
                  <h1>Pengeluaran</h1>
                </div>

                <form onSubmit={handleSubmitBelanja}>
                  <div className="mb-2">
                    <label
                      htmlFor="belanja"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Belanja
                    </label>
                    <input
                      type="text"
                      name="belanja"
                      id="belanja"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Belanja"
                      onChange={(belanja) => setBelanja(belanja.target.value)} value={belanja}
                    />
                    {props.errors.belanja && <div className="text-red-600">{props.errors.belanja}</div>}
                  </div>
                  <div>
                    <label
                      htmlFor="tanggalBelanja"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tanggal Belanja
                    </label>
                    <input
                      type="date"
                      name="tanggalBelanja"
                      id="tanggalBelanja"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(tanggalBelanja) => setTanggalBelanja(tanggalBelanja.target.value)} value={tanggalBelanja}
                    />
                    {props.errors.tanggalBelanja && <div className="text-red-600">{props.errors.tanggalBelanja}</div>}
                  </div>

                  <div className="mt-5">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                    &nbsp;
                    <Link
                      href="/"
                      type="button"
                      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      Kembali
                    </Link>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
DepoBelanja.layout = (page) => <Main children={page} />;

export default DepoBelanja;
