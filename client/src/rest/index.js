import { GET, commonHeaderForGet, wsEndpoint } from '../config/rest';

export const createParamsForGet = () => ({
    method: GET,
    headers: commonHeaderForGet,
});


export const urlForChapterList = `${wsEndpoint}/chapters/?fields=id,title`;
export const createUrlForChapter = id => `${wsEndpoint}/chapters/${id}/`;
