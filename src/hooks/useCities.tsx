import {useQuery} from '@tanstack/react-query';
import React, {useMemo} from 'react';
import {getAreas, getCities} from '../network/serverRequests';

const useCities = ({locationId = -1}: {locationId?: number}) => {
  const {data: cities} = useQuery({
    queryKey: ['cities'],
    queryFn: getCities,
    enabled: locationId ? false : true,
  });

  const {data: areas} = useQuery({
    queryKey: ['areas', locationId],
    queryFn: ({queryKey}) => getAreas(queryKey[1]),
    enabled: locationId ? true : false,
  });

  const formatCities = useMemo(() => {
    if (cities?.result) {
      return cities?.result?.map((item: any) => {
        return {label: item.name, value: item.id};
      });
    }
  }, [cities?.result]);

  const formateAreas = useMemo(() => {
    if (areas?.result) {
      return areas?.result?.map((item: any) => {
        return {label: item.area_name, value: item.id};
      });
    }
  }, [areas?.result]);

  return {
    cities: formatCities,
    areas: formateAreas,
  };
};

export default useCities;
