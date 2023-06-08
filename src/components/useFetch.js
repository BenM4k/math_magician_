import { useState, useEffect } from 'react';

const useFetch = (link) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(link, {
          headers: { 'X-Api-Key': 'VwbFJrA2fRyoAlxo2UemCw==6Fg3cU4buiz80nwI' },
        });
        if (!res.ok) {
          throw Error('could not fetch data from this source');
        }
        const json = await res.json();
        setData(json);
        setIsPending(false);
        return json;
      } catch (err) {
        setIsPending(false);
        setErrorState(true);
        return err;
      }
    };
    fetchData();
  }, [link]);

  return { data, isPending, errorState };
};

export default useFetch;
