import CurrentLoanCart from '@/components/CurrentLoanCart';
import FeatureMenu from '@/components/FeatureMenu';
import Header from '@/components/Header';
import PanelSledingUp from '@/components/PanelSledingUp';
import { datafeature } from '@/constants/feature';

import { useState } from 'react';
import { FlatList, StatusBar, View } from 'react-native';

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <View className='flex-1'>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#2563eb'
      />

      <Header onPressAllFinance={() => setOpen(true)} />

      <View className='mt-10'>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={datafeature}
          renderItem={({ item }) => <FeatureMenu title={item.title}>{item.icons}</FeatureMenu>}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            gap: 15,
          }}
        />
      </View>

      <CurrentLoanCart />

      {/* SLIDING PANEL */}
      <PanelSledingUp
        visible={open}
        onClose={() => setOpen(false)}
      />
    </View>
  );
}
