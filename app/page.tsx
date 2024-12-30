"use client";

import {
  faPencil,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getData, setUpdateStatus } from "./models/mahasiswa";

// buat fungsi untuk dialog hapus
async function setDelete(npm: string, nama: string) {
  // alert("Hapus Data");
  if (confirm(`Data Mahasiswa : ${npm} - ${nama} Ingin Dihapus ?`) == true) {
    // alert("Ok");
    await setUpdateStatus(npm);
    alert(`Data Mahasiswa : ${npm} - ${nama} Berhasil Dihapus`);
    // reload otomatis
    location.reload();
  }
  // else {
  //   alert("Cancel");
  // }
}
// function setDelete() {
//   alert ("Hapus Data");
// }

export default function RootPage() {
  // buat hook
  // hook dengan "use  state"
  const [getValue, setValue] = useState({}); //setvalue memproses | menyimpan data, getValue menampilkan proses | data

  // buat fungsi untuk panggil "getData"
  async function fetchData() {
    setValue(await getData());
  }

  // hook dengan "use effect"
  useEffect(() => {
    // panggil fungsi "getData"
    fetchData();
  }, []);

  // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // })

  return (
    <>
      <title>View Data Mahasiswa</title>
      <nav className="text-center mb-5 flex justify-end">
        <Link href={"/add"} className="btn btn-active btn-neutral">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          Tambah Data Mahasiswa
        </Link>
      </nav>
      {/* tampilkan data mahasiswa */}
      <table className="w-full">
        <thead>
          <tr className="bg-slate-300 h-12 ">
            <th className="w-10% border border-slate-700">Aksi</th>
            <th className="w-10% border border-slate-700">NPM</th>
            <th className="w-1/2 border border-slate-700">Nama</th>
            <th className="w-30% border border-slate-700">Prodi</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(getValue).map((data: any, index: number) => (
            // <div key={index}>
            //   <div>
            //     {data.npm} - {data.nama} - {data.prodi}
            //   </div>
            // </div>

            <tr key={index}>
              <td className="border border-slate-700 p-2.5 text-center">
                {/* icon edit */}
                <Link
                  href={`/edit/${btoa(data.npm)}`}
                  className="bg-sky-700 hover:bg-sky-600 text-white py-5X px-2.5 rounded-md mr-1 text-sm"
                  title="Ubah Data"
                >
                  <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>

                {/* icon delete */}
                <Link
                  href={"/"}
                  className="bg-rose-700 hover:bg-rose-600 text-white py-5X px-2.5 rounded-md ml-1 text-sm"
                  title="Hapus Data"
                  onClick={()=>{setDelete(data.npm, data.nama)}}
                >
                  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </Link>

              </td>
              <td className="border border-slate-700 px-2.5 text-center">
                {data.npm}
              </td>
              <td className="border border-slate-700 px-2.5 text-justify">
                {data.nama}
              </td>
              <td className="border border-slate-700 px-2.5 text-center">
                {data.prodi}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {mahasiswa?.nama} */}
    </>
  );
}
