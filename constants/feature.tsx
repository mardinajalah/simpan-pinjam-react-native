import { HandCoins, Landmark, Scroll, Store } from 'lucide-react-native';

const atributeIcon = {
  color: '#2563eb',
  size: 30,
};

export const datafeature = [
  {
    id: 1,
    title: 'simpanan',
    icons: (
      <Landmark
        color={atributeIcon.color}
        size={atributeIcon.size}
      />
    ),
  },
  {
    id: 2,
    title: 'pinjaman',
    icons: (
      <HandCoins
        color={atributeIcon.color}
        size={atributeIcon.size}
      />
    ),
  },
  {
    id: 3,
    title: 'Slip KSP',
    icons: (
      <Scroll
        color={atributeIcon.color}
        size={atributeIcon.size}
      />
    ),
  },
  {
    id: 4,
    title: 'Toko',
    icons: (
      <Store
        color={atributeIcon.color}
        size={atributeIcon.size}
      />
    ),
  },
];
