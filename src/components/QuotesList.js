import { useState, useEffect, React } from 'react';

function QuotesList() {
  const link = 'https://api.api-ninjas.com/v1/quotes?category=computers';

  const [quotes, setQuotes] = useState([]);
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
        setQuotes(json);
        setIsPending(false);
        return json;
      } catch (err) {
        setIsPending(false);
        setErrorState(true);
        return err;
      }
    };
    fetchData();
  }, []);

  return (
    <ul>
      {isPending && <h2>Loading...</h2>}
      {quotes && quotes.map((quotes) => (
        <li key={quotes.author}>
          <h2 style={{
            textAlign: 'center',
          }}
          >
            {`${quotes.quote} -  ${quotes.author}`}
          </h2>
        </li>
      ))}
      {errorState && <h2>Failed to fetch Data</h2>}
    </ul>
  );
}

export default QuotesList;
