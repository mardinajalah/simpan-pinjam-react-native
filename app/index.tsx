import CurrentLoanCart from '@/components/CurrentLoanCart';
import FeatureMenu from '@/components/FeatureMenu';
import Header from '@/components/Header';
import { datafeature } from '@/constants/feature';

import { FlatList, StatusBar, View } from 'react-native';

export default function Index() {
  return (
    <View className='flex-1'>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#2563eb'
      />
      <Header />
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
    </View>
  );
}
