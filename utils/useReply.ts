import useSWR, {Fetcher} from "swr";
import { IReply } from "../interfaces";

// Define fetcher wrapper.
const fetcher: Fetcher<IReply[], string> = (url) => fetch(url).then(res => res.json());

export const useReply = (id : string) => {
    const { data, error } = useSWR<IReply[], Error>(`api/replies/parent/${id}`, fetcher);

    return {
      replies: data,
      isLoading: !error && !data,
      isError: error
    }
}