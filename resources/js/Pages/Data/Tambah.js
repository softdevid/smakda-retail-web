import Main from "@/Components/Guru/Main";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import { useState, useEffect } from "react";
// import React, { useState } from "react";


const Tambah = (props) => {
  console.log(props);
  const [nik, setNik] = useState('');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [notif, setNotif] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nik, nama, alamat, jabatan, jenisKelamin
    }
    Inertia.post('/tambahdata/store', data);


    setNotif(true);
    setNik('');
    setNama('');
    setAlamat('');
    setJabatan = useState('Jabatan');
    setJenisKelamin('');
    console.log(props, data);
  }


  return (
    <>
      <div className="container px-4 mx-auto my-4">
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Tambah Data</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {notif &&
            <div class="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
              <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">{props.flash.message}</span>
              </div>
            </div>
          }

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="nik"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                NIK
              </label>
              <input
                type="text"
                id="nik"
                name="nik"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="NIK Anda"
                nChange={(e) => setNik(e.target.value)}
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
                onChange={(e) => setNama(e.target.value)}
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
                onChange={(e) => setAlamat(e.target.value)}
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
                onChange={(e) => setJabatan(e.target.value)}
              >
                <option>Jabatan</option>
                <option value="guru">Guru</option>
                <option value="karyawan">Karyawan</option>
                <option value="kepala sekolah">Kepala Sekolah</option>
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
                onChange={(e) => setJenisKelamin(e.target.value)}
              >
                <option>Jenis Kelamin</option>
                <option value="laki-laki">Laki - laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
          &nbsp;
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
Tambah.layout = (page) => <Main children={page} />;

export default Tambah;
