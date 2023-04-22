import { cryptoMapper } from '../common/utils/cryptoMapper';
import { ResponseData } from './types';

export async function fetchCryptos() {
  return fetch('https://api.coinlore.net/api/tickers/?limit=50')
    .then(response => response.json())
    .then((data: ResponseData) => {
      if (data && data?.data?.length > 0) {
        return data.data.map(item => cryptoMapper(item));
      }
      return undefined;
    })
    .catch(error => {
      console.log(error);
      return undefined;
    });
}
