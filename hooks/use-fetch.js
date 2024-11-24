import { useState ,useCallback,useRef} from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = useCallback(async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      // const response = await cbRef.current(...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  },[]);

  return { data, loading, error, fn, setData };
};

export default useFetch;