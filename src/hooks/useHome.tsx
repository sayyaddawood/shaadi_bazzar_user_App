import {useQuery} from '@tanstack/react-query';
import {getHomeScreenData} from '../network/serverRequests';
import {useMemo, useState} from 'react';

const useHome = () => {
  const [cityId, setCityId] = useState<string>('1');
  const {data, isPending} = useQuery({
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
    data: data?.result || [],
    cityId,
    noData,
    onSelectedCity,
  };
};

export default useHome;
