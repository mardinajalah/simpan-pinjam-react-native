import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  return (
    <View className='w-full bg-blue-600 p-5 rounded-b-2xl'>
      {/* Username */}
      <Text className='mt-8 text-xl font-bold capitalize text-white'>gita nusantara sejahtra</Text>

      {/* Card */}
      <View className='mt-8 mb-5 rounded-2xl border border-white p-5'>
        {/* Top Row */}
        <View className='flex-row items-center justify-between'>
          <View className='flex-row items-center gap-2.5'>
            <Text className='rounded-lg bg-green-600 px-5 py-1 text-white'>aktif</Text>
            <Text className='font-bold text-white'>Suhai</Text>
          </View>

          <Text className='text-white'>1 januari 2026</Text>
        </View>

        {/* Cart Section */}
        <View className='mt-5 flex-row items-center justify-between'>
          {/* Left */}
          <View className='flex-1'>
            <Text className='mb-2 text-white capitalize'>pokok & wajib</Text>
            <Text className='text-lg font-bold text-white'>Rp 1.000.000</Text>
          </View>

          {/* Divider */}
          <View className='mx-5 h-12 w-[1px] bg-white' />

          {/* Right */}
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
