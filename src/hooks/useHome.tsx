import {useQuery} from '@tanstack/react-query';
import {getHomeScreenData} from '../network/serverRequests';
import {useMemo, useState} from 'react';
import useFCM from './useFCM';

const useHome = () => {
  useFCM();
  const [cityId, setCityId] = useState<string>('1');
  const {data, isPending, isRefetching, refetch} = useQuery({
    queryKey: ['home', cityId],
    queryFn: ({queryKey}) => getHomeScreenData(queryKey[1]),
  });

  const onSelectedCity = (city: string) => setCityId(city);

  const noData = useMemo(() => {
    if (!data?.result) return false;
    let d = true;
    for (const item of data?.result) {
      if (item.vendors?.length > 0) {
        d = false;
        break;
      }
    }
    return d;
  }, [data?.result]);

  return {
    isLoading: isPending,
    isRefetching,
    data: data?.result || [],
    cityId,
    noData,
    onSelectedCity,
    refetch,
  };
};

export default useHome;
