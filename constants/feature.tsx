import { HandCoins, Landmark, Scroll, Store } from 'lucide-react-native';

export const datafeature = [
  {
    id: 1,
    title: 'simpanan',
    icons: (
      <Landmark
        color='#2563eb'
        size={30}
      />
    ),
  },
  {
    id: 2,
    title: 'pinjaman',
    icons: (
      <HandCoins
        color='#2563eb'
        size={30}
      />
    ),
  },
  {
    id: 3,
    title: 'Slip KSP',
    icons: (
      <Scroll
        color='#2563eb'
        size={30}
      />
    ),
  },
  {
    id: 4,
    title: 'Toko',
    icons: (
      <Store
        color='#2563eb'
        size={30}
      />
    ),
  },
];
