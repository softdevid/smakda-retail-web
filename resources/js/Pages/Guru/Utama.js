import Main from "@/Components/Guru/Main";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Utama = () => {
    return (
        <>
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
                                    href="/"
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Tambah Data
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="py-4 px-6">Sliver</td>
                            <td className="py-4 px-6">Laptop</td>
                            <td className="py-4 px-6">$2999</td>
                            <td className="py-4 px-6">L</td>
                            <td className="py-4 px-6 text-right">
                                <Link
                                    href="/edit"
                                    type="button"
                                    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-4 mb-2 dark:focus:ring-yellow-900"
                                >
                                    Ubah
                                </Link>

                                <Link
                                    href="/delete"
                                    type="button"
                                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-4 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
