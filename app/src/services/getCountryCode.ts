import { IP_API_URL } from '@env';
import fetch from 'node-fetch';

export const getCountryCode = () =>
  fetch(IP_API_URL, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => json.country_code);
