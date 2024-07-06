import {useQuery} from '@tanstack/react-query';
import React, {useMemo} from 'react';
import {getCities} from '../network/serverRequests';

const useCities = () => {
  const {data: cities} = useQuery({
    queryKey: ['cities'],
    queryFn: getCities,
  });

  const formatCities = useMemo(() => {
    if (cities?.result) {
      return cities?.result?.map((item: any) => {
        return {label: item.name, value: item.id};
      });
    }
  }, [cities?.result]);

  return {
    cities: formatCities,
  };
};

export default useCities;
