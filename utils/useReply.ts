import useSWR, {Fetcher} from "swr";
import moment from "moment";
import { IReply } from "../interfaces";

const { NEXT_PUBLIC_API_REPLIES_PARENT_URL } = process.env;
if ( !NEXT_PUBLIC_API_REPLIES_PARENT_URL ) {
  throw new Error('NEXT_PUBLIC_API_REPLIES_PARENT_URL not found');
}

// Define fetcher wrapper.
const fetcher: Fetcher<IReply[], string> = (url) => fetch(url).then(res => res.json());

export const useReply = (id : string | null) => {
    // Fetch replies data.
    const { data, error } = useSWR<IReply[], Error>(
      id ? `${NEXT_PUBLIC_API_REPLIES_PARENT_URL}/${id}` : null, fetcher
    );

    // Sort the replies data in ascending (earliest to latest).
    let sortedReplies : IReply[] = []
    if (data) {
      sortedReplies  = data.sort((a,b) => moment(a.createdAt.toString()).valueOf() - moment(b.createdAt.toString()).valueOf());
    }

    // Return data.
    return {
      replies: sortedReplies,
      isLoading: !error && !data,
      isError: error
    }
}