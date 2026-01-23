import CurrentLoanCart from '@/components/CurrentLoanCart';
import FeatureMenu from '@/components/FeatureMenu';
import Header from '@/components/Header';
import PanelSledingUp from '@/components/PanelSledingUp';
import { CurrentLoanCartSkeleton, FeatureMenuSkeleton, HeaderSkeleton, TransactionSkeleton } from '@/components/Skeleton';
import { dataSemuaRiwayat } from '@/constants/data';
import { datafeature } from '@/constants/feature';
import { ChevronRight } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { Portal } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setLoading(true);

    // simulasi reload data
    simulateFetch(() => {
      setRefreshing(false);
      setLoading(false);
    });
  };

  useEffect(() => {
    simulateFetch(() => {
      setLoading(false);
    });
  }, []);

  const simulateFetch = (callback: () => void) => {
    setTimeout(callback, 2000);
  };

  if (loading) {
    return (
      <View className='flex-1 bg-gray-100'>
        <HeaderSkeleton />

        <View className='flex-row gap-4 px-5 mt-5'>
          {[1, 2, 3, 4].map((i) => (
            <FeatureMenuSkeleton key={i} />
          ))}
        </View>

        <CurrentLoanCartSkeleton />
        <TransactionSkeleton />
      </View>
    );
  }

  return (
    <SafeAreaView className='flex-1 bg-blue-600'>
      <ScrollView
        className='flex-1 bg-gray-100'
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#2563eb']}
            tintColor='#2563eb'
          />
        }
      >
        <Header onPressAllFinance={() => setOpen(true)} />

        <View className='mt-5'>
          <FlatList
            scrollEnabled={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={datafeature}
            renderItem={({ item }) => <FeatureMenu title={item.title}>{item.icons}</FeatureMenu>}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              gap: 15,
              paddingVertical: 5,
            }}
          />
        </View>

        <CurrentLoanCart />

        <View className='bg-white mt-5 mx-5 p-5 rounded-2xl elevation-sm'>
          <View className='flex-row items-center justify-between'>
            <Text className='text-xl font-medium text-[#3e3e3e]'>Transaksi</Text>
            <Pressable className='flex-row items-center justify-between bg-blue-600 py-1 pr-1 pl-5 gap-2.5 rounded-lg elevation-sm'>
              <Text className='text-white'>Lihat Semua</Text>
              <ChevronRight
                color={'#fff'}
                size={20}
              />
            </Pressable>
          </View>

          <View className='mt-5'>
            <FlatList
              scrollEnabled={false}
              data={dataSemuaRiwayat}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{ gap: 15 }}
              renderItem={({ item }) => (
                <View className='flex-row items-center justify-between border-b border-gray-200 pb-3'>
                  <View>
                    <Text className='text-blue-600 text-sm'>{item.tanggal}</Text>
                    <Text className='text-[#3e3e3e] font-medium'>{item.title}</Text>
                  </View>
                  <Text className='text-red-600 font-bold'>{item.total}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>

      {/* SLIDING PANEL */}
      <Portal>
        <PanelSledingUp
          visible={open}
          onClose={() => setOpen(false)}
        />
      </Portal>
    </SafeAreaView>
  );
}
