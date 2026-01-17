import { FC, ReactNode } from 'react';
import { Text, View } from 'react-native';

interface FeatureMenuProps {
  title: string;
  children: ReactNode;
}

const FeatureMenu: FC<FeatureMenuProps> = ({ title, children }) => {
  return (
    <View className='bg-white py-6 rounded-2xl items-center justify-center w-[80px] elevation-sm'>
      {children}
      <Text className={`mt-2 text-sm font-bold text-green-600`}>{title}</Text>
    </View>
  );
};

export default FeatureMenu;
