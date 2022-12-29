const PrintDataGuru = (props) => {
  return (
    <>
      <div className="overflow-x-auto relative" onLoad={window.print()}>
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
                    <th scope="row" className="px-1 text-center md:py-4 md:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {i++}
                    </th>
                    <td className="py-1 md:px-3">
                      {data.nik}
                    </td>
                    <td className="py-1 md:px-3">
                      {data.nama}
                    </td>
                    <td className="py-1 md:px-3">
                      {data.alamat}
                    </td>
                    <td className="py-1 md:px-3">
                      {data.jabatan}
                    </td>
                    <td className="py-1 md:px-3">
                      {data.jenisKelamin}
                    </td>
                    <td className="py-1 md:px-3">
                      {data.sisaSaldo}
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
