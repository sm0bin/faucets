import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useAxiosPublic from "./useAxiosPublic";

const useUser = async () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { data, isPending, refetch } = useQuery({

        queryKey: ['User'],
        queryFn: async () => {
            const res = await axiosPublic('/users/me')
            return res.data;
        }
    })
    return [data, isPending, refetch];
};

export default useUser;