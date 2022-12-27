import url from 'url';

export const getParams = (param) => {
    const params = new url.URLSearchParams(param);
    return params;
}

export const getParam = (param) => {
    paramCase("PascalCase");
    return params;
}