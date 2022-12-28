import Main from "@/Components/Guru/Main";
import Authenticated from "@/Layouts/Authenticated";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Utama = (props) => {

  return (
    <>
        <div className="container mx-auto my-4">
          <div className="text-center font-bold mx-auto my-4 text-2xl">
            <h1>Data Guru</h1>
          </div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    NIK
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Nama
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Alamat
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Jabatan
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Jenis Kelamin
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Aksi
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <Link
                      href="/tambahdata"
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xs md:text-sm p-1 md:p-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Tambah Guru
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.dataGuru ? props.dataGuru.map((data, i) => {
                  return (
                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {data.nik}
                      </th>
                      <td className="py-4 px-6">{data.nama}</td>
                      <td className="py-4 px-6">{data.alamat}</td>
                      <td className="py-4 px-6">{data.jabatan}</td>
                      <td className="py-4 px-6">{data.jenisKelamin}</td>
                      <td className="flex items-center py-4 px-6 space-x-3">
                        <Link
                          href={`/deposit-belanja/${data.nik}`}
                          type="button"
                          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Deposit / Pengeluaran
                        </Link>
                        <Link
                          href={`/data-guru/${data.nik}`}
                          type="button"
                          className="focus:outline-none text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
                        >
                          Rincian
                        </Link>
                        <Link
                          href={`/data-guru/${data.nik}/edit`}
                          type="button"
                          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                        >
                          Ubah
                        </Link>
                        <Link
                          href={`/data-guru/delete/${data.nik}`} method="delete" as="button"
                          type="button"
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                          Hapus
                        </Link>
                      </td>
                    </tr>
                  )
                }) : <p>Belum ada Data</p>}
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
};
Utama.layout = (page) => <Main children={page} />;

export default Utama;
