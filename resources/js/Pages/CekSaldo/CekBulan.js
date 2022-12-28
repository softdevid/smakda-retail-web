import { Link } from "@inertiajs/inertia-react";

export default function CekBulan(props) {
// const CekBulan = (props) => {

//   console.log(props);

//   function print() {
//     window.print();
//   }
  return (
    <>
      <div className="container mx-auto my-4" id="print-content">
        <div className="text-center font-bold mx-auto my-4 text-2xl">
          <h1>Rincian Data</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-5xl bg-white p-4 rounded-lg overflow-hidden">
            <div className="py-4 px-6">
              <div className="flex items-center text-gray-700">
                <h1 className="px-2 text-lg">NIK : </h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Nama : </h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <p className="px-2 text-lg">Alamat : </p>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Jabatan : </h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Jenis Kelamin : </h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Saldo : </h1>
              </div>
            </div>
            <div>
              <Link
                href="/"
                type="button"
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Kembali
              </Link>
              &nbsp;
              <button
                // href="/print"
                type="button" onClick={() => window.print()}
                className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              >
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// export default CekBulan;
