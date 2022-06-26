import { API_URL } from '@env';
import fetch from 'node-fetch';

export const getPlayers = () =>
  fetch(API_URL).then(response => response.json());
