import { useState, useEffect, React } from 'react';

function Quotes() {
  const link = 'https://api.api-ninjas.com/v1/quotes?category=computers';

  const [quotes, setQuotes] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(link, {
        headers: { 'X-Api-Key': 'VwbFJrA2fRyoAlxo2UemCw==6Fg3cU4buiz80nwI' },
      });
      const json = await res.json();
      setQuotes(json);
      setIsPending(false);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {isPending && <h2>Loading...</h2>}
      {quotes && quotes.map((quotes) => (
        <li key={quotes.author}>
          <h2>{quotes.author}</h2>
          <p>{quotes.quote}</p>
        </li>
      ))}
    </ul>
  );
}

export default Quotes;
