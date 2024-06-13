import {useQuery} from '@tanstack/react-query';
import {
  getSearchVenue,
  getVendorCategory,
  getVenueDetail,
  getVenueReviews,
} from '../network/serverRequests';
import {useMemo} from 'react';
import {useIsFocused} from '@react-navigation/native';

type useVendorType = {
  id?: string;
  searchText?: string;
  fetchCategory?: boolean;
  fetchDetail?: boolean;
  fetchReviews?: boolean;
  fetchSearch?: boolean;
};

const useVendor = ({
  id,
  fetchCategory = false,
  fetchDetail = false,
  fetchReviews = false,
  fetchSearch = false,
  searchText,
}: useVendorType) => {
  const isFocused = useIsFocused();

  const {data: categories, isPending: isCategoryLoading} = useQuery({
    queryKey: ['vendorCategories'],
    queryFn: getVendorCategory,
    enabled: fetchCategory,
  });

  const {data, isPending} = useQuery({
    queryKey: ['vendorDetails', id],
    queryFn: ({queryKey}) => getVenueDetail(queryKey[1]),
    enabled: fetchDetail,
  });

  const {data: reviewsData, isPending: reviewsLoading} = useQuery({
    queryKey: ['vendorReviews', id],
    queryFn: ({queryKey}) => getVenueReviews(queryKey[1]),
    enabled: fetchReviews && isFocused,
  });

  const imagesList = useMemo(() => {
    if (!data?.result) return [];
    return data?.result?.vendorDetails?.vendorMedia?.map(it => it.path);
  }, [data?.result]);

  const {data: searchData, isPending: searchLoading} = useQuery({
    queryKey: ['searchVendor', id, searchText],
    queryFn: ({queryKey}) => getSearchVenue(queryKey[1], queryKey[2]),
    enabled: fetchSearch && searchText && searchText?.length > 0 ? true : false,
  });

  return {
    isLoading: isPending,
    data: data?.result,
    imagesList: imagesList ?? [],
    categories: categories?.result || [],
    reviewsData: reviewsData?.result,
    reviewsLoading,
    searchedList: searchData?.result || [],
    searchLoading,
  };
};

export default useVendor;
