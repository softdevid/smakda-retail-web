import Main from "@/Components/Guru/Main";
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import * as XLSX from 'xlsx';

const Utama = (props) => {
  const [query, setQuery] = useState("");
  const keys = ["nama", "alamat", "nik"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  function formatRupiah(angka) {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }


  const exportToExcel = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    // const ws = XLSX.utils.json_to_sheet(data, { header: ['NIK', 'Nama', 'Alamat', 'Jabatan', 'Jenis Kelamin', 'Sisa Saldo'] });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Rekapitulasi Saldo SMAKDA RETAIL.xlsx');
  }

  const exportData = async () => {
    const response = await fetch('/cetak-data');
    const jsonData = await response.json();
    exportToExcel(jsonData);
  }

  //untuk print data
  function handlePrintOtherPage() {
    const newWindow = window.open("/print-data");
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
      <div className="container mx-auto my-4">
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Data Guru</h1>
          {/* <ExportExcelButton data={data} /> */}
          {/* <exportData /> */}
          <div className="mt-1 mb-7 mx-auto max-w-xl">
            <div className="flex items-center">
              <label htmlFor="search-guru" className="sr-only">
                Cari...
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-guru"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cari..."
                  onChange={(e) => setQuery(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* start search field */}
        {/* end search field */}
        {/* <div className="grid grid-cols-2 gap-4"> */}
        <div className="flex justify-end items-end m-4">
          <Link
            href="/tambahdata"
            as="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs md:text-sm p-1 md:p-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tambah Guru
          </Link>
          &nbsp;
          <button onClick={exportData} filename="Rekapitulasi Saldo SMAKDA"
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-xs md:text-sm p-1 md:p-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Export Excel
          </button>
          &nbsp;
          <button
            onClick={handlePrintOtherPage}
            type="button"
            className="flex text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-md text-xs md:text-sm p-1 md:p-2 text-center mr-3 md:mr-0 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
              />
            </svg>
            Cetak Data Guru
          </button>
        </div>
        {/* </div> */}

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  No
                </th>
                <th scope="col" className="py-3 px-6">
                  NIK
                </th>
                <th scope="col" className="py-3 px-6">
                  Nama
                </th>
                <th scope="col" className="py-3 px-6">
                  Jabatan
                </th>
                <th scope="col" className="py-3 px-6">
                  Jenis Kelamin
                </th>
                <th scope="col" className="py-3 px-6">
                  Saldo
                </th>
                <th scope="col" className="py-3 px-6">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {search(props.dataGuru).length > 0 ? (
                search(props.dataGuru).map((data, i) => {
                  return (
                    <tr
                      key={i}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {i + 1}
                      </th>
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {data.nik}
                      </th>
                      <td className="py-4 px-6">{data.nama}</td>
                      <td className="py-4 px-6">{data.jabatan}</td>
                      <td className="py-4 px-6">{data.jenisKelamin}</td>
                      <td className="py-4 px-6">
                        {formatRupiah(data.sisaSaldo)}
                      </td>
                      <td className="flex items-center py-4 px-6 space-x-2">
                        <Link
                          href={`/deposit-belanja/${data.nik}`}
                          as="button"
                          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Deposit/Belanja
                        </Link>
                        <Link
                          href={`/data-guru/${data.nik}`}
                          as="button"
                          className="focus:outline-none text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
                        >
                          Rincian
                        </Link>
                        <Link
                          href={`/data-guru/${data.nik}/edit`}
                          as="button"
                          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          Ubah
                        </Link>
                        <Link
                          href={`/data-guru/delete/${data.nik}`}
                          method="delete"
                          as="button"
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Hapus
                        </Link>
                        <Link
                          href={`/data-guru/history/${data.nik}`}
                          as="button"
                          className="focus:outline-none text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900"
                        >
                          Histori
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : query !== "" ? (
                <tr>
                  <td colSpan="7">{`Tidak ada data dengan pencarian '${query}'`}</td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="7">{`Tidak ada data`}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
Utama.layout = (page) => <Main children={page} />;

export default Utama;
