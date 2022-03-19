import { BASE_URL, _category, _categories, active } from "../constants";

export const getCategories = () => {
  return fetch(`${BASE_URL}/${_categories}`).then((res) => res.json());
};

export const getDataByPage = (page) => {
  return fetch(`${BASE_URL}${page}`).then((res) => res.json());
};

export const getDataByCategory = (category) => {
  return fetch(`${BASE_URL}${category}`).then((res) => res.json());
};

export const filterDataBySearch = (data, value) => {
  return data.filter(({ name }) =>
    name.toLowerCase().includes(value.toLowerCase())
  );
};

export const normalizedPath = (path) => path.replaceAll("%20", " ");

export const activateCategory = (path) => {
  if (!path.includes(_category)) {
    return;
  }

  path = normalizedPath(path);

  let category = path.split("/")[2];
  document.querySelector(`#${category}`)?.classList.add("active");
};

export const removeActiveClass = (container) => {
  container.querySelector(`.${active}`)?.classList.remove(active);
};
