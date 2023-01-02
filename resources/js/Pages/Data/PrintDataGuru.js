const PrintDataGuru = (props) => {

  function CurrentDate() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return <p>Per: {`${day}/${month}/${year}`}</p>;
  }

  function formatRupiah(angka) {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }
  return (
    <>
      <div onLoad={window.print()}>
        <b className="text-2xl">REKAPITULASI SALDO</b><br />
        <b className="text-xl">SMAKDA RETAIL SMK N 2 PURBALINGGA</b><br />
        <div>{CurrentDate()}</div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                No
              </th>
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
                Sisa Saldo
              </th>
            </tr>
          </thead>
          <tbody>
            {props.dataGuru ? (
              props.dataGuru.map((data, i) => {
                return (
                  <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="text-center md:px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {i + 1}
                    </th>
                    <td className="px-2 md:px-6">
                      {data.nik}
                    </td>
                    <td className="px-2 md:px-6">
                      {data.nama}
                    </td>
                    <td className="px-2 md:px-6">
                      {data.alamat}
                    </td>
                    <td className="px-2 md:px-6">
                      {data.jabatan}
                    </td>
                    <td className="px-2 md:px-6">
                      {data.jenisKelamin}
                    </td>
                    <td className="px-2 md:px-6">
                      {formatRupiah(data.sisaSaldo)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <p>Belum ada Data</p>
            )}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default PrintDataGuru;
