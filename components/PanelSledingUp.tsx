import React, { FC, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Pressable, Text, View } from 'react-native';

const { height } = Dimensions.get('window');

interface PropsPanelSeldingUp {
  visible: boolean;
  onClose: () => void;
}

const dataMenuKeuangan = [
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

const PanelSeldingUp: FC<PropsPanelSeldingUp> = ({ visible, onClose }) => {
  const translateY = useRef(new Animated.Value(height)).current;
  const [rendered, setRendered] = useState(visible);

  const [activeMenu, setActiveMenu] = useState(dataMenuKeuangan[0]);

  useEffect(() => {
    if (visible) {
      setRendered(true);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }).start(() => setRendered(false));
    }
  }, [visible]);

  if (!rendered) return null;

  return (
    <View className='absolute inset-0 justify-end'>
      {/* Overlay */}
      <Pressable
        className='absolute inset-0 bg-black/40'
        onPress={onClose}
      />

      {/* Panel */}
      <Animated.View
        style={{ transform: [{ translateY }] }}
        className='bg-white rounded-t-3xl py-6'
      >
        <View className='w-12 h-1 bg-gray-300 rounded-full self-center mb-4' />
        <Text className='text-lg font-bold text-center'>Semua Keuangan</Text>

        {/* MENU HORIZONTAL */}
        <View className='mt-4 bg-[#f4f4f4]'>
          <FlatList
            data={dataMenuKeuangan}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              gap: 20,
              paddingVertical: 20,
              width: '100%',
              justifyContent: 'center',
            }}
            renderItem={({ item }) => {
              const isActive = item.id === activeMenu.id;
              return (
                <Pressable
                  onPress={() => setActiveMenu(item)}
                  className={`px-5 py-2 rounded-full elevation-sm ${isActive ? 'bg-blue-600' : 'bg-white'}`}
                >
                  <Text className={`font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>{item.title}</Text>
                </Pressable>
              );
            }}
          />
        </View>

        <View className='bg-[#f4f4f4]'>
          <FlatList
            data={activeMenu.data}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            style={{
              height: 400,
            }}
            contentContainerStyle={{ gap: 12, paddingVertical: 10, paddingHorizontal: 15 }}
            renderItem={({ item }) => (
              <View className='bg-white p-4 rounded-2xl elevation-sm'>
                <Text className='text-gray-500 text-sm'>{item.tanggal}</Text>

                <View className='flex-row justify-between items-center mt-1'>
                  <View className='flex-row gap-3 items-center'>
                    <Text className='text-base font-semibold'>{item.hari}</Text>
                    <Text className='text-gray-500'>{item.waktu}</Text>
                  </View>

                  <Text className='text-red-700 font-medium'>{item.nominal}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default PanelSeldingUp;
