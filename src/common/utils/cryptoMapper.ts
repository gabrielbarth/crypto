import { CrytoData } from '../../services/types';

export function cryptoMapper(crypto: CrytoData) {
  const { id, symbol, name, price_usd, rank, percent_change_24h } = crypto;

  return {
    id,
    symbol,
    name,
    price_usd,
    rank,
    percent_change_24h,
  };
}
