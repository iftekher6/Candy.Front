import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../api/axios";

const fetchProducts = async ({ queryKey }) => {
  const [ type, page] = queryKey;
  
  let url = "/api/v1/products/get"; // Default: All products
  if (type === "paginated") {
    url = `/api/v1/products/pagination?page=${page}`; // Paginated endpoint
  }
  
  const {data} = await axiosPrivate.get(url);
  console.log(data)
//   if (!response.ok) throw new Error("Failed to fetch products");
  return data;
};

// Fetch all products
export const useAllProducts = () => {
  return useQuery({
    queryKey: ["products", "all"],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
};

// Fetch paginated products
export const usePaginatedProducts = (page) => {
  return useQuery({
    queryKey: ["products", "paginated", page],
    queryFn: fetchProducts,
    keepPreviousData: true, // Keep old data while fetching new data
  });
};
