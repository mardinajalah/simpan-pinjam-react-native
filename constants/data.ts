export const dataMenuKeuangan = [
  {
    id: 1,
    title: 'Pokok',
    data: Array.from({ length: 7 }, (_, i) => ({
      id: i + 1,
      tanggal: '01/01/2026',
      hari: 'Kamis',
      waktu: '2 hari',
      nominal: 'Rp 100.000',
    })),
  },
  {
    id: 2,
    title: 'Wajib',
    data: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      tanggal: '02/01/2026',
      hari: 'Jumat',
      waktu: '1 hari',
      nominal: 'Rp 75.000',
    })),
  },
  {
    id: 3,
    title: 'Sukarela',
    data: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      tanggal: '03/01/2026',
      hari: 'Sabtu',
      waktu: '3 hari',
      nominal: 'Rp 150.000',
    })),
  },
];

export const dataSemuaRiwayat = [
  {
    id: 1,
    title: 'penjualan',
    total: 'Rp 35.000',
    tanggal: '01/01/2026',
    status: 'belum lunas',
    metode: 'transfer',
    detail: [
      {
        id: 1,
        name: 'surya 12',
        nominal: 'Rp 23.000',
        amount: 1,
      },
      {
        id: 2,
        name: 'minuman kaleng',
        nominal: 'Rp 12.000',
        amount: 1,
      },
    ],
  },
  {
    id: 2,
    title: 'Penjualan',
    total: 'Rp 35.000',
    tanggal: '01/01/2026',
    status: 'belum lunas',
    metode: 'transfer',
    detail: [
      {
        id: 1,
        name: 'surya 12',
        nominal: 'Rp 23.000',
        amount: 1,
      },
      {
        id: 2,
        name: 'minuman kaleng',
        nominal: 'Rp 12.000',
        amount: 1,
      },
    ],
  },
  {
    id: 3,
    title: 'Penjualan',
    total: 'Rp 35.000',
    tanggal: '01/01/2026',
    status: 'belum lunas',
    metode: 'transfer',
    detail: [
      {
        id: 1,
        name: 'surya 12',
        nominal: 'Rp 23.000',
        amount: 1,
      },
      {
        id: 2,
        name: 'minuman kaleng',
        nominal: 'Rp 12.000',
        amount: 1,
      },
    ],
  },
];
