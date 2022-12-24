import Main from "@/Components/Guru/Main";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { useState, useEffect } from "react";
// import React, { useState } from "react";

const Ubah = (props) => {
  console.log(props);
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  // const [notif, setNotif] = useState(false);

  const handleSubmit = () => {
    const data = {
      nik,
      nama,
      alamat,
      jabatan,
      jenisKelamin,
    };
    Inertia.post("/data-guru/update", data);
    // setNotif(true);
    setNik("");
    setNama("");
    setAlamat("");
    setJabatan("Jabatan");
    setJenisKelamin("Jenis Kelamin");
    console.log(props, data);
  };

  return (
    <>
      <div className="container px-4 mx-auto my-4">
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Ubah Data</h1>
        </div>
        <form>
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
                value={nik}
                onChange={(nik) => setNik(nik.target.value)}
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
                value={nama}
                onChange={(nama) => setNama(nama.target.value)}
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
                value={alamat}
                onChange={(alamat) => setAlamat(alamat.target.value)}
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
                onChange={(jabatan) => setJabatan(jabatan.target.value)}
              >
                <option selected>Jabatan</option>
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
                required
                onChange={(jenisKelamin) =>
                  setJenisKelamin(jenisKelamin.target.value)
                }
              >
                <option value="" selected>
                  Jenis Kelamin
                </option>
                <option value="laki-laki">Laki - laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => handleSubmit()}
          >
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
Ubah.layout = (page) => <Main children={page} />;

export default Ubah;
