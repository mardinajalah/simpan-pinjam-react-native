import React from 'react';
import { Pressable, Text, View } from 'react-native';

type Props = {
  onPressAllFinance: () => void;
};

const Header = ({ onPressAllFinance }: Props) => {
  return (
    <View className='w-full bg-blue-600 p-5 rounded-b-2xl'>
      <Text className='mt-8 text-xl font-bold capitalize text-white'>gita nusantara sejahtra</Text>

      <View className='mt-8 mb-5 rounded-2xl border border-white p-5'>
        <View className='flex-row items-center justify-between'>
          <View className='flex-row items-center gap-2.5'>
            <Text className='rounded-lg bg-green-600 px-5 py-1 text-white'>aktif</Text>
            <Text className='font-bold text-white'>Suhai</Text>
          </View>

          {/* CLICKABLE TEXT */}
          <Pressable
            onPress={onPressAllFinance}
            className='p-2'
          >
            <Text className='text-white font-semibold'>Semua Keuangan</Text>
          </Pressable>
        </View>

        <View className='mt-5 flex-row items-center justify-between'>
          <View className='flex-1'>
            <Text className='mb-2 text-white capitalize'>pokok & wajib</Text>
            <Text className='text-lg font-bold text-white'>Rp 1.000.000</Text>
          </View>

          <View className='mx-5 h-12 w-[1px] bg-white' />

          <View className='flex-1'>
            <Text className='mb-2 text-white capitalize'>sukarela</Text>
            <Text className='text-lg font-bold text-white'>Rp 400.000</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
