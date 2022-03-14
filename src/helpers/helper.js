import { BASE_URL, _category, categories } from "../constants";

export const getCategories = () => {
    return fetch(`${BASE_URL}/${categories}`)
            .then(res => res.json());
}

export const getDataByPage = (page) => {
    return fetch(`${BASE_URL}${page}`)
            .then(res => res.json());
}

export const getDataByCategory = (category) => {
    return fetch(`${BASE_URL}${category}`)
            .then(res => res.json());
}

export const filterDataBySearch = (data, value) => {
    return data.filter(({ name }) => name.toLowerCase().includes(value));
}
