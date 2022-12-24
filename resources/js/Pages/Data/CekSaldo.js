import Main from "@/Components/Guru/Main";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Rincian = () => {
  return (
    <>
      <div className="container mx-auto my-4">
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Cek Saldo</h1>
        </div>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="tanggal"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tanggal
              </label>
              <input
                type="date"
                name="tanggal"
                id="tanggal"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tanggal"
                required
                value={nama}
                onChange={(nama) => setNama(nama.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="bulan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bulan
              </label>
              <input
                type="month"
                name="bulan"
                id="bulan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tanggal"
                required
                value={nama}
                onChange={(nama) => setNama(nama.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="tahun"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tahun
              </label>
              <select
                type="tel"
                name="tahun"
                id="tahun"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
                onChange={(jabatan) => setJabatan(jabatan.target.value)}
              >
                <option selected>Jabatan</option>
                <option value="guru">Guru</option>
                <option value="karyawan">Karyawan</option>
                <option value="kepala sekolah">Kepala Sekolah</option>
              </select>
            </div>
          </div>
          <Link
            href="/"
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Kembali
          </Link>
        </form>
      </div>
    </>
  );
};
Rincian.layout = (page) => <Main children={page} />;

export default Rincian;
