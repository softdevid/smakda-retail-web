import Main from "@/Components/Guru/Main";
import { Dialog, Transition } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import numeral from "numeral";
import React, { Fragment, useEffect, useState } from "react";

const History = (props) => {
  // console.log(props);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleModalOpen = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setModalData({});
    setIsModalOpen(false);
  };

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
      keysBelanja.some((key) =>
        item[key].toString().toLowerCase().includes(queryBelanja)
      )
    );
  };

  const [page, setPage] = useState(1);
  const data = props.dataDeposit;
  const limit = 1;
  const totalPages = Math.ceil(data.length / limit);

  const [pageBelanja, setPageBelanja] = useState(1);
  const dataBelanja = props.dataBelanja;
  const totalPagesBelanja = Math.ceil(dataBelanja.length / limit);

  const paginateData = (pageNumber) => {
    setPage(pageNumber);
  };

  const paginateDataBelanja = (pageNumber) => {
    setPageBelanja(pageNumber);
  };

  const [value, setValue] = useState("");

  const formatRupiah = (input) => {
    const numberString = input.toString().replace(/[^,\d]/g, "");
    const split = numberString.split(",");
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return rupiah;
  };

  return (
    <>
      <div className="container mx-auto my-4" id="print-content">
        {props.flash.message &&
          <div className="mx-5">
            <div className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
              <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">{props.flash.message}</span>
              </div>
            </div>
          </div>
        }

        {props.flash.error &&
          <div className="mx-5">
            <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
              <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">{props.flash.error}</span>
              </div>
            </div>
          </div>
        }

        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Rincian Data</h1>
        </div>
        {props.flash.message &&
          <div className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">{props.flash.message}</span>
            </div>
          </div>
        }
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
                <h1 className="px-2 text-lg">
                  Sisa Saldo : {formatRupiah(props.dataGuru.sisaSaldo)}
                </h1>
              </div>
            </div>
            <div>
              &nbsp;
              <Link
                href="/"
                as="button"
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
                search(props.dataDeposit)
                  .slice((page - 1) * limit, page * limit)
                  .map((data, i) => {
                    return (
                      <tr
                        key={i}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {data.nik}
                        </th>
                        <td className="py-4 px-6">{data.tanggalSaldo}</td>
                        <td className="py-4 px-6">{formatRupiah(data.saldo)}</td>
                        <td className="py-4 px-6">
                          <button
                            type="button"
                            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={() =>
                              handleModalOpen({
                                judul: "Saldo",
                                tanggalSaldo: data.tanggalSaldo,
                                saldo: data.saldo,
                                id: data.id,
                              })
                            }
                          >
                            Ubah
                          </button>
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
          <div className="text-center">
            {page > 1 && (
              <button
                className="p-2 bg-gray-800 text-white text-left rounded-md mx-2"
                onClick={() => paginateData(page - 1)}
              >
                Previous
              </button>
            )}
            {page < totalPages && (
              <button
                className="p-2 bg-gray-800 text-white text-end rounded-md mx-2"
                onClick={() => paginateData(page + 1)}
              >
                Next
              </button>
            )}
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
                searchBelanja(props.dataBelanja)
                  .slice((pageBelanja - 1) * limit, pageBelanja * limit)
                  .map((dataBelanja, i) => {
                    return (
                      <tr
                        key={i}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {dataBelanja.nik}
                        </th>
                        <td className="py-4 px-6">
                          {dataBelanja.tanggalBelanja}
                        </td>
                        <td className="py-4 px-6">{formatRupiah(dataBelanja.belanja)}</td>
                        <td className="py-4 px-6">
                          <button
                            type="button"
                            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={() =>
                              handleModalOpen({
                                judul: "Belanja",
                                tanggalBelanja: dataBelanja.tanggalBelanja,
                                belanja: dataBelanja.belanja,
                                id: dataBelanja.id
                              })
                            }
                          >
                            Ubah
                          </button>
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
          <div className="text-center">
            {pageBelanja > 1 && (
              <button
                className="p-2 bg-gray-800 text-white rounded-md mx-2"
                onClick={() => paginateDataBelanja(pageBelanja - 1)}
              >
                Previous
              </button>
            )}
            {pageBelanja < totalPagesBelanja && (
              <button
                className="p-2 bg-gray-800 text-white rounded-md mx-2"
                onClick={() => paginateData(pageBelanja + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={handleModalClose}
        data={modalData}
      />
    </>
  );
};

function Modal(props) {
  const { data } = props;

  const closeModal = () => {
    props.closeModal();
  };

  //saldo update
  const [saldo, setSaldo] = useState(data.saldo);
  const [tanggalSaldo, setTanggalSaldo] = useState(data.tanggalSaldo);

  const handleSubmitSaldo = () => {
    // e.preventDefault();
    const dataSaldo = {
      saldo, tanggalSaldo
    }
    console.log(dataSaldo);
    Inertia.post(`/history/deposit/update/${data.id}`, dataSaldo);
    closeModal();
  }

  //belanja update
  const [belanja, setBelanja] = useState(data.belanja);
  const [tanggalBelanja, setTanggalBelanja] = useState(data.tanggalBelanja);

  const handleSubmitBelanja = () => {
    // e.preventDefault();
    const dataBelanja = {
      belanja, tanggalBelanja
    }

    Inertia.post(`/history/belanja/update/${data.id}`, dataBelanja);
    closeModal();
  }

  let rupiahFormatSaldo;
  if (saldo) {
    rupiahFormatSaldo = numeral(saldo).format('0,0');
  } else {
    rupiahFormatSaldo = '';
  }

  let rupiahFormatBelanja;
  if (belanja) {
    rupiahFormatBelanja = numeral(belanja).format('0,0');
  } else {
    rupiahFormatBelanja = '';
  }

  const handleKeyDown = (event) => {
    if (event.key === '.' || event.key === ',') {
      event.preventDefault();
    }
  };

  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-slate-800"
                  >
                    {`Ubah Histori ${data.judul}`}
                  </Dialog.Title>

                  <Dialog.Description as="div">
                    <div className="flex flex-col items-center space-y-2">
                      {data.judul === "Saldo" ? (
                        <div className="mt-3 grid grid-cols-2">
                          <input id="idSaldo" defaultValue={data.id} onChange={(e) => setIdSaldo(data.id)} type="hidden" />
                          <div>
                            <div>
                              <label>Saldo/deposit</label> <br />
                              <input id="saldo" placeholder="contoh: 125000. Angka harap digabung" onChange={(e) => setSaldo(e.target.value)} defaultValue={data.saldo} className="w-full p-2 border" onKeyDown={handleKeyDown} />
                            </div>
                          </div>
                          <div>Rp. {rupiahFormatSaldo}</div>
                          <div className="mt-3">
                            <label>Tanggal Saldo</label> <br />
                            <input id="tanggalSaldo" onChange={(e) => setTanggalSaldo(e.target.value)} defaultValue={data.tanggalSaldo} className="w-full p-2 border" type="date" />
                          </div>
                        </div>
                      ) : (
                        <div className="mt-3 grid grid-cols-2">
                          <div>
                            <input id="idBelanja" defaultValue={data.id} onChange={(e) => setIdBelanja(data.id)} type="hidden" />
                            <div>
                              <label>Belanja</label> <br />
                              <input id="belanja" placeholder="contoh: 125000. Angka harap digabung" onChange={(e) => setBelanja(e.target.value)} defaultValue={data.belanja} className="w-full p-2 border" onKeyDown={handleKeyDown} />
                            </div>
                            <div className="mt-3">
                              <label>Tanggal Belanja</label> <br />
                              <input id="tanggalBelanja" onChange={(e) => setTanggalBelanja(e.target.value)} defaultValue={data.tanggalBelanja} className="w-full p-2 border" type="date" />
                            </div>
                          </div>
                          <div>Rp. {rupiahFormatBelanja}</div>
                        </div>
                      )}
                    </div>
                  </Dialog.Description>
                  {data.judul === "Saldo" ? (
                    <div className="mt-3">
                      <p className="text-sky-600 my-2 font-bold">Harap mengisi saldo/deposit dengan angka bersambung tanpa titik/koma</p>
                      <button
                        type="button"
                        className="mt-3 text-white bg-blue-600 p-2 rounded-lg mx-3"
                        onClick={() => handleSubmitSaldo()}
                      >
                        Simpan
                      </button>
                      <button
                        type="button"
                        className="mt-3 text-white mx-3 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        onClick={closeModal}
                      >
                        Batal
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="mt-3">
                        <p className="text-sky-600 my-2 font-bold">Harap mengisi belanja dengan angka bersambung tanpa titik/koma</p>
                        <button
                          type="button"
                          className="mt-3 text-white bg-blue-600 p-2 rounded-lg mx-3"
                          onClick={() => handleSubmitBelanja()}
                        >
                          Simpan
                        </button>
                        <button
                          type="button"
                          className="mt-3 text-white mx-3 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                          onClick={closeModal}
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  )}

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

History.layout = (page) => <Main children={page} />;
export default History;
