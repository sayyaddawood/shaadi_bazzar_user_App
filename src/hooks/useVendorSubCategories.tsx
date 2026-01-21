import {useInfiniteQuery} from '@tanstack/react-query';
import {getSubCategories} from '../network/serverRequests';

type useVendorSubCategoriesType = {
  id?: string;
  fetchSubCategory?: boolean;
};

const useVendorSubCategories = ({
  id,
  fetchSubCategory = false,
}: useVendorSubCategoriesType) => {

  const {
    data: subCategories,
    isPending: isSubCatLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch
  } = useInfiniteQuery({
    queryKey: ['vendorSubCategories', id],
    queryFn: ({queryKey, pageParam = 1}) =>
      getSubCategories(queryKey[1] as string, pageParam as number),
    enabled: fetchSubCategory,
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.result.currentPage < lastPage.result.totalPages) {
        return Number(lastPage.result.currentPage) + 1;
      }
      return undefined;
    },
  });

  return {
    subCategories:
      subCategories?.pages?.flatMap(page => page.result?.vendors) || [],
    isSubCatLoading,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch,
    fetchNextPage
  };
};

export default useVendorSubCategories;
