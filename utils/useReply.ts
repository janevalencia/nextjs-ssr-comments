import useSWR, {Fetcher} from "swr";
import { IReply } from "../interfaces";

const { NEXT_PUBLIC_API_REPLIES_PARENT_URL } = process.env;
if ( !NEXT_PUBLIC_API_REPLIES_PARENT_URL ) {
  throw new Error('NEXT_PUBLIC_API_REPLIES_PARENT_URL not found');
}

// Define fetcher wrapper.
const fetcher: Fetcher<IReply[], string> = (url) => fetch(url).then(res => res.json());

export const useReply = (id : string) => {
    const { data, error } = useSWR<IReply[], Error>(`${NEXT_PUBLIC_API_REPLIES_PARENT_URL}/${id}`, fetcher);

    return {
      replies: data,
      isLoading: !error && !data,
      isError: error
    }
}