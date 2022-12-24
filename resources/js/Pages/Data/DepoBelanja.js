import Main from "@/Components/Guru/Main";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const DepoBelanja = () => {
  return (
    <>
      <div className="container mx-auto my-4">
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Deposit dan Pengeluaran</h1>
        </div>
        <div className="m-4">
          <div className="bg-white rounded-lg grid md:grid-cols-2 p-4 gap-4">
            <div>
              <div className="flex justify-center items-center">
                <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                  <div class="py-4 px-6">
                    <h1 class="text-2xl font-semibold text-gray-800">
                      Ardianto Putra Pratomo
                    </h1>
                    <p class="py-2 text-lg text-gray-700">Alamat</p>
                    <div class="flex items-center mt-4 text-gray-700">
                      <h1 class="px-2 text-sm">NIK</h1>
                    </div>
                    <div class="flex items-center mt-4 text-gray-700">
                      <h1 class="px-2 text-sm">Jabatan</h1>
                    </div>
                    <div class="flex items-center mt-4 text-gray-700">
                      <h1 class="px-2 text-sm">Jenis Kelamin</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center font-bold mx-auto my-4 text-2xl">
                <h1>Deposit & Pengeluaran</h1>
              </div>
              <form>
                <div className="grid gap-6 mb-6 px-4 md:grid-cols-1">
                  <div>
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
                      placeholder="Nama Lengkap"
                      required
                    />
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
                      id="tanggal"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
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
                      placeholder="Nama Lengkap"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tanggalbelanja"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tanggal Belanja
                    </label>
                    <input
                      type="date"
                      name="tanggalBelanja"
                      id="tanggalbelanja"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </form>
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
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
DepoBelanja.layout = (page) => <Main children={page} />;

export default DepoBelanja;
