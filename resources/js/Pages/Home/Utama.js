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
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mx-2 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                            <td className="py-4 px-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illo, deserunt! Dicta dolores
                                impedit doloribus, consequuntur ipsum sapiente
                                voluptatum esse illo non, quasi cupiditate cum
                                culpa nostrum ea. Perspiciatis distinctio
                                nesciunt accusantium exercitationem aperiam
                                incidunt doloremque nostrum numquam, aspernatur
                                nemo deserunt quisquam eos beatae qui dolores
                                expedita ad rem itaque perferendis temporibus
                                autem! Aperiam earum, officiis provident
                                dolorum, eum omnis commodi beatae consectetur
                                accusantium illum harum quibusdam at maiores,
                                obcaecati soluta dolor voluptate mollitia
                                architecto. Unde, illo inventore, aliquid
                                voluptatem quia maiores mollitia dolorem, ab
                                libero veritatis ut facere. Voluptatibus
                                officiis nobis necessitatibus fugit voluptatem
                                excepturi nulla soluta, voluptate dolore!
                                Delectus.
                            </td>
                            <td className="py-4 px-6">$2999</td>
                            <td className="py-4 px-6">L</td>
                            <td className="py-4 px-6">
                                <Link
                                    href="/pemasukkan"
                                    type="button"
                                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                >
                                    Pemasukkan
                                </Link>
                                <Link
                                    href="/pengeluaran"
                                    type="button"
                                    class="focus:outline-none text-white bg-[#ff2348] hover:bg-[#c80d2c] focus:ring-4 focus:ring-[#ff647e] font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-[#ff2348] dark:hover:bg-[#c80d2c] dark:focus:ring-[#ff647e]"
                                >
                                    Pengeluaran
                                </Link>
                                <Link
                                    href="/edit"
                                    type="button"
                                    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                                >
                                    Ubah
                                </Link>

                                <Link
                                    href="/delete"
                                    type="button"
                                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
