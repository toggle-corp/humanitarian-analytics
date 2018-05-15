import { RestRequest } from '../vendor/react-store/utils/rest';

// Alias for prepareQueryParams
export const p = RestRequest.prepareUrlParams;

// eslint-disable-next-line no-restricted-globals
const reactAppApiHttps = location.protocol === 'https:'
    ? 'https'
    : process.env.REACT_APP_API_HTTPS;

export const wsEndpoint = (() => {
    if (!process.env.REACT_APP_API_END) {
        return 'http://localhost:8000';
    }
    return `${reactAppApiHttps}://${process.env.REACT_APP_API_END}`;
})();

export const GET = 'GET';
export const commonHeaderForGet = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};
