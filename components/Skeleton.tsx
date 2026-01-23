import { useEffect, useRef } from 'react';
import { Animated, View, ViewStyle } from 'react-native';

type Props = {
  className?: string;
  style?: ViewStyle;
};

export const SkeletonBox = ({ className, style }: Props) => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View
      className={className}
      style={[style, { opacity }]}
    />
  );
};

export const HeaderSkeleton = () => {
  return (
    <View className='w-full bg-blue-600 p-5 rounded-b-2xl'>
      <SkeletonBox className='mt-4 h-6 w-2/3 bg-blue-500 rounded-lg' />

      <View className='mt-8 mb-5 rounded-2xl border border-white p-5'>
        <View className='flex-row items-center justify-between'>
          <View className='flex-row items-center gap-2.5'>
            <SkeletonBox className='h-6 w-16 bg-green-500 rounded-lg' />
            <SkeletonBox className='h-5 w-20 bg-blue-500 rounded-lg' />
          </View>

          <SkeletonBox className='h-8 w-28 bg-blue-500 rounded-lg' />
        </View>

        <View className='mt-5 flex-row items-center justify-between'>
          <View className='flex-1'>
            <SkeletonBox className='h-4 w-24 bg-blue-500 rounded mb-2' />
            <SkeletonBox className='h-5 w-28 bg-blue-500 rounded' />
          </View>

          <View className='mx-5 h-12 w-[1px] bg-white/50' />

          <View className='flex-1'>
            <SkeletonBox className='h-4 w-24 bg-blue-500 rounded mb-2' />
            <SkeletonBox className='h-5 w-28 bg-blue-500 rounded' />
          </View>
        </View>
      </View>
    </View>
  );
};

export const FeatureMenuSkeleton = () => {
  return (
    <View className='bg-white py-6 rounded-2xl items-center justify-center w-[80px] elevation-sm'>
      <SkeletonBox className='h-6 w-6 bg-gray-300 rounded-full mb-2' />
      <SkeletonBox className='h-4 w-14 bg-gray-300 rounded' />
    </View>
  );
};

export const CurrentLoanCartSkeleton = () => {
  return (
    <View className='bg-white mx-5 mt-5 rounded-2xl elevation-sm'>
      <View className='flex-row justify-end'>
        <SkeletonBox className='bg-red-300 py-2 w-1/3 rounded-tr-2xl rounded-bl-2xl' />
      </View>

      <View className='px-3 pb-6'>
        <SkeletonBox className='h-5 w-40 bg-gray-300 rounded self-center' />
        <SkeletonBox className='h-7 w-48 bg-gray-300 rounded self-center mt-3' />

        <View className='flex-row justify-between mt-5'>
          <SkeletonBox className='h-4 w-24 bg-gray-300 rounded' />
          <SkeletonBox className='h-4 w-24 bg-gray-300 rounded' />
        </View>

        <SkeletonBox className='w-full h-3 bg-gray-200 rounded-full mt-2' />

        <SkeletonBox className='h-4 w-24 bg-gray-300 rounded self-center mt-3' />
      </View>
    </View>
  );
};

export const TransactionSkeleton = () => {
  return (
    <View className='bg-white mt-5 mx-5 p-5 rounded-2xl elevation-sm'>
      {/* Header */}
      <View className='flex-row items-center justify-between'>
        <SkeletonBox className='h-5 w-28 bg-gray-300 rounded' />
        <SkeletonBox className='h-8 w-24 bg-blue-300 rounded-lg' />
      </View>

      {/* List */}
      <View className='mt-5 gap-4'>
        {[1, 2, 3].map((i) => (
          <View
            key={i}
            className='flex-row items-center justify-between border-b border-gray-200 pb-3'
          >
            <View>
              <SkeletonBox className='h-3 w-20 bg-gray-300 rounded mb-2' />
              <SkeletonBox className='h-4 w-32 bg-gray-300 rounded' />
            </View>

            <SkeletonBox className='h-4 w-20 bg-gray-300 rounded' />
          </View>
        ))}
      </View>
    </View>
  );
};
