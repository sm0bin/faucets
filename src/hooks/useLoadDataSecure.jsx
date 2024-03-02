import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLoadDataSecure = (url, key) => {
    const axiosSecure = useAxiosSecure();

    const { data, refetch, isPending, isError } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            const res = await axiosSecure(url)
            return res.data
        }
    })
    return [data, isPending, refetch, isError];
};

export default useLoadDataSecure;
