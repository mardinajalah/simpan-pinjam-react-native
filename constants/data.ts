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
