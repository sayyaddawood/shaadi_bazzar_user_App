import {useQuery} from '@tanstack/react-query';
import {getHomeScreenData} from '../network/serverRequests';

const useHome = () => {
  const {data, isPending} = useQuery({
    queryKey: ['home'],
    queryFn: getHomeScreenData,
  });

  return {
    isLoading: isPending,
    data: data?.result || [],
  };
};

export default useHome;
