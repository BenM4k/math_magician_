import { React } from 'react';
import useFetch from './useFetch';

function QuotesList() {
  const link = 'https://api.api-ninjas.com/v1/quotes?category=computers';

  const { data: quotes, isPending, errorState } = useFetch(link);

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
