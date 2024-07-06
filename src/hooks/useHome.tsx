import {useQuery} from '@tanstack/react-query';
import {getHomeScreenData} from '../network/serverRequests';
import {useState} from 'react';

const useHome = () => {
  const [cityId, setCityId] = useState<string>("1");
  const {data, isPending} = useQuery({
    queryKey: ['home', cityId],
    queryFn: ({queryKey}) => getHomeScreenData(queryKey[1]),
  });

  const onSelectedCity = (city: string) => setCityId(city);

  return {
    isLoading: isPending,
    data: data?.result || [],
    cityId,
    onSelectedCity,
  };
};

export default useHome;
