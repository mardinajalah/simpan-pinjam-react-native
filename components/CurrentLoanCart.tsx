import React from 'react';
import { Text, View } from 'react-native';

const CurrentLoanCart = () => {
  const totalLoan = 3000000;
  const paidLoan = 1000000;
  const remainingLoan = totalLoan - paidLoan;

  const progress = Math.floor((paidLoan / totalLoan) * 100);

  return (
    <View className='bg-white mx-5 mt-5 rounded-2xl elevation-sm'>
      <View className='flex-row justify-end'>
        <View className='bg-red-600 py-2 w-1/3 items-center rounded-tr-2xl rounded-bl-2xl'>
          <Text className='text-white font-bold'>Pinjaman</Text>
        </View>
      </View>
      <View className='px-3 pb-6'>
        <Text className='text-lg font-medium text-[#3e3e3e] text-center'>Pinjaman Saat Ini</Text>
        <Text className='text-2xl font-bold text-[#3e3e3e] mt-2 text-center'>Rp 3.000.000</Text>
        {/* Info nominal */}
        <View className='flex-row justify-between mt-5'>
          <Text className='text-[#3e3e3e]'>Rp {paidLoan.toLocaleString('id-ID')}</Text>
          <Text className='text-red-600'>Rp {remainingLoan.toLocaleString('id-ID')}</Text>
        </View>

        {/* Progress Bar */}
        <View className='w-full h-3 bg-gray-200 rounded-full mt-2 overflow-hidden'>
          <View
            className='h-full bg-blue-600 rounded-full'
            style={{ width: `${progress}%` }}
          />
        </View>

        {/* Persentase */}
        <Text className='text-center mt-2 text-sm text-[#3e3e3e] font-medium'>{progress}% Terbayar</Text>
      </View>
    </View>
  );
};

export default CurrentLoanCart;
