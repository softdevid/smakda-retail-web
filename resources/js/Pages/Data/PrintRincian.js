const PrintRincian = (props) => {
  console.log(props)

  window.onbeforeprint = function () {
    const button = document.getElementById('not-to-print');
    button.parentNode.removeChild(button);
  };

  function formatRupiah(angka) {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }


  return (
    <>
      <div className="container mx-auto my-4" id="print-content">
        <div className="text-center font-bold mx-auto text-2xl">
          <h1>Rincian Data</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-5xl bg-white p-4 rounded-lg overflow-hidden">
            <div className="py-4 px-6">
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">NIK : {props.dataGuru.nik}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Nama : {props.dataGuru.nama}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <p className="px-2 text-lg">Alamat : {props.dataGuru.alamat}</p>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Jabatan : {props.dataGuru.jabatan}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Jenis Kelamin : {props.dataGuru.jenisKelamin}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <h1 className="px-2 text-lg">Sisa Saldo : {formatRupiah(props.dataGuru.sisaSaldo)}</h1>
              </div>
            </div>
            <div>
              <button
                // href="/print"
                type="button" onClick={() => window.print()} id="not-to-print"
                className="component-to-hide text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
              >
                Preview Print
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PrintRincian;
