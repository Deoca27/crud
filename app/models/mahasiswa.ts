"use server";
import { PrismaClient } from "@prisma/client";

// buat variable "prisma"
const prisma = new PrismaClient();

// buat fungsi untuk ambil data mahasiswa
export async function getData() {
    // buat variable "mahasiswa"
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
      where: {
        status: "Y",
        // prodi : {
        //   contains : "formatik"
        // }
      },   
    });
  
    return mahasiswa;
  }
  
// buat fungsi hapus data (update status status Y >> N)
export const setUpdateStatus = async (npm: string) => {
  await prisma.tb_mahasiswa.updateMany({
    where: {
      npm: npm,
    },
    data: {
      status: 'N',
    },
  })
};

// buat fungsi cek data mahasiswa (npm)
export const checkData = async(npm: string) => {
  // buat variable "check"
  const check = await prisma.tb_mahasiswa.findMany({
    where: {
      npm: npm,
    },   
  });

  return check;
}

// buat fungsi untuk simpan data
export const saveData = async(npm: string, nama: string, prodi: string) => {
  await prisma.tb_mahasiswa.create({
    data: {
      npm: npm,
      nama: nama,
      prodi: prodi,
      status: 'Y',
    },
  })
}