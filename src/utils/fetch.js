import { API_CONFIG } from './constants';

export const httpRequest = (url, method, data) => {
  return fetch(`${API_CONFIG.baseUrl}/${url}`, {
    method,
    body: JSON.stringify(data),
  }).then(res => res.json());
};
