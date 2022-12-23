import Main from "@/Components/Guru/Main";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Utama = () => {
  return (
    <>
      <div className="text-center font-bold mx-auto my-4 text-2xl">
        <h1>Data Guru</h1>
      </div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                NIK
              </th>
              <th scope="col" class="py-3 px-6">
                Nama
              </th>
              <th scope="col" class="py-3 px-6">
                Alamat
              </th>
              <th scope="col" class="py-3 px-6">
                Jabatan
              </th>
              <th scope="col" class="py-3 px-6">
                Jenis Kelamin
              </th>
              <th scope="col" class="py-3 px-6">
                Aksi
              </th>
              <th scope="col" class="py-3 px-6">
                <Link
                  href="/tambahdata"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Tambah Data
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                9084719827419
              </th>
              <td class="py-4 px-6">Ardianto</td>
              <td class="py-4 px-6">Kalimanah</td>
              <td class="py-4 px-6">Siswa</td>
              <td class="py-4 px-6">Jenis Kelamin</td>
              <td class="flex items-center py-4 px-6 space-x-3">
                <Link
                  href="/deposit"
                  type="button"
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Deposit / Pengeluaran
                </Link>
                <Link
                  href="/rincian"
                  type="button"
                  class="focus:outline-none text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                >
                  Rincian
                </Link>
                <Link
                  href="/edit"
                  type="button"
                  class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Ubah
                </Link>
                <Link
                  href="/delete"
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Hapus
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
Utama.layout = (page) => <Main children={page} />;

export default Utama;
