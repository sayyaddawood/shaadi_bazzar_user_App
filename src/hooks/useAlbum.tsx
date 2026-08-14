import {useQuery} from '@tanstack/react-query';
import {getVenueAlbum} from '../network/serverRequests';
import {useMemo} from 'react';

type useAlbumsType = {
  id: string;
};

const useAlbums = ({id}: useAlbumsType) => {
  const {data, isPending} = useQuery({
    queryKey: ['vendorAlbums', id],
    queryFn: ({queryKey}) => getVenueAlbum(queryKey[1]),
  });

  return {
    isLoading: isPending,
    data: data?.result?.vendorAlbums || [],
  };
};

export default useAlbums;
