import Main from "@/Components/Guru/Main";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Tambah = () => {
  return (
    <>
      <div className="text-center font-bold mx-auto my-4 text-2xl">
        <h1>Tambah Data</h1>
      </div>
      <form className="container mx-4 md:mx-auto my-4">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              NIK
            </label>
            <input
              type="text"
              id="first_name"
              name="nik"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="NIK Anda"
              required
            />
          </div>
          <div>
            <label
              htmlFor="namalengkap"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              id="namalengkap"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nama Lengkap"
              required
            />
          </div>
          <div>
            <label
              htmlFor="alamat"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Alamat
            </label>
            <textarea
              type="text"
              name="alamat"
              id="alamat"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Alamat Anda"
              required
            />
          </div>
          <div>
            <label
              htmlFor="jabatan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Jabatan
            </label>
            <select
              type="tel"
              name="jabatan"
              id="jabatan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            >
              <option selected>Jabatan Anda</option>
              <option>Guru</option>
              <option>Karyawan</option>
              <option>Kepala Sekolah</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="jeniskelamin"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Jenis Kelamin
            </label>
            <select
              type="tel"
              name="jenisKelamin"
              id="jeniskelamin"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            >
              <option selected>Jenis Kelamin Anda</option>
              <option>Laki - laki</option>
              <option>Perempuan</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="sisasaldo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sisa Saldo
            </label>
            <input
              type="text"
              name="sisaSaldo"
              id="sisasaldo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nama Lengkap"
              required
            />
          </div>
        </div>
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Kembali
        </Link>
      </form>
    </>
  );
};
Tambah.layout = (page) => <Main children={page} />;

export default Tambah;
