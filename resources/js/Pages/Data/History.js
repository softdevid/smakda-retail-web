import Main from "@/Components/Guru/Main";
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";



const History = (props) => {
  console.log(props);
  const [query, setQuery] = useState("");
  const keys = ["saldo", "tanggalSaldo", "nik"];


  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toString().toLowerCase().includes(query))
    );
  };

  const [queryBelanja, setQueryBelanja] = useState("");
  const keysBelanja = ["belanja", "tanggalBelanja", "nik"];

  const searchBelanja = (dataBelanja) => {
    return dataBelanja.filter((item) =>
      keysBelanja.some((key) => item[key].toString().toLowerCase().includes(queryBelanja))
    );
  };

  const [page, setPage] = useState(1);
  const data = props.dataDeposit;
  const dataBelanja = props.dataBelanja;
  const limit = 10;
  const totalPages = Math.ceil(data.length / limit);
  const totalPagesBelanja = Math.ceil(dataBelanja.length / limit);

  const paginateData = (pageNumber) => {
    setPage(pageNumber);
  }

  const [value, setValue] = useState('');

  const formatRupiah = (input) => {
    const numberString = input.toString().replace(/[^,\d]/g, '');
    const split = numberString.split(',');
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
    return rupiah;
  }

  return (
    <>
      <div className="container mx-auto my-4" id="print-content">
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Rincian Data</h1>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <div className="max-w-5xl bg-white p-4 rounded-lg overflow-hidden">
            <div className="px-6">
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">NIK : {props.dataGuru.nik}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Nama : {props.dataGuru.nama}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Sisa Saldo : {props.dataGuru.sisaSaldo}</h1>
              </div>
            </div>
            <div>
              &nbsp;
              <Link
                href="/"
                type="button"
                className="ml-5 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* deposit */}
        <div className="overflow-x-auto relative sm:rounded-lg mx-3">
          <input
            type="text"
            id="search-deposit"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari deposit"
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  NIK
                </th>
                <th scope="col" className="py-3 px-6">
                  Tanggal Saldo
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
              {search(props.dataDeposit).length > 0 ? (
                search(props.dataDeposit).slice((page - 1) * limit, page * limit).map((data, i) => {
                  return (
                    <tr key={i}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {data.nik}
                      </th>
                      <td className="py-4 px-6">
                        {data.saldo}
                      </td>
                      <td className="py-4 px-6">
                        {data.tanggalSaldo}
                      </td>
                      <td className="py-4 px-6">
                        <button>Ubah</button>
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
          <div>
            {page > 1 &&
              <button className="p-2 bg-gray-800 text-white text-left" onClick={() => paginateData(page - 1)}>Previous</button>
            }
            {page < totalPages &&
              <button className="p-2 bg-gray-800 text-white text-end" onClick={() => paginateData(page + 1)}>Next</button>
            }
          </div>

        </div>

        {/* BELANJA */}
        <div className="overflow-x-auto relative sm:rounded-lg mx-3">
          <input
            type="text"
            id="search-belanja"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari belanja"
            onChange={(e) => setQueryBelanja(e.target.value)}
            required
          />
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  NIK
                </th>
                <th scope="col" className="py-3 px-6">
                  Tanggal Belanja
                </th>
                <th scope="col" className="py-3 px-6">
                  Belanja
                </th>
                <th scope="col" className="py-3 px-6">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {searchBelanja(props.dataBelanja).length > 0 ? (
                searchBelanja(props.dataBelanja).slice((page - 1) * limit, page * limit).map((dataBelanja, i) => {
                  return (
                    <tr key={i}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {dataBelanja.nik}
                      </th>
                      <td className="py-4 px-6">
                        {dataBelanja.belanja}
                      </td>
                      <td className="py-4 px-6">
                        {dataBelanja.tanggalBelanja}
                      </td>
                      <td className="py-4 px-6">
                        <button className="p-2 bg-yellow-400 text-white-">Ubah</button>
                      </td>
                    </tr>
                  );
                })
              ) : queryBelanja !== "" ? (
                <tr>
                  <td colSpan="7">{`Tidak ada data dengan pencarian '${queryBelanja}'`}</td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="7">{`Tidak ada data`}</td>
                </tr>
              )}
            </tbody>
          </table>
          <div>
            {page > 1 &&
              <button className="p-2 bg-gray-800 text-white text-left" onClick={() => paginateData(page - 1)}>Previous</button>
            }
            {page < totalPages &&
              <button className="p-2 bg-gray-800 text-white text-end" onClick={() => paginateData(page + 1)}>Next</button>
            }
          </div>
        </div>
      </div>
    </>
  )
}

History.layout = (page) => <Main children={page} />;
export default History;
