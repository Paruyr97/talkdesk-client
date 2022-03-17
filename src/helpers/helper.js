import { BASE_URL, _category, categories, active } from "../constants";

export const getCategories = () => {
  return fetch(`${BASE_URL}/${categories}`).then((res) => res.json());
};

export const getDataByPage = (page) => {
  return fetch(`${BASE_URL}${page}`).then((res) => res.json());
};

export const getDataByCategory = (category) => {
  return fetch(`${BASE_URL}${category}`).then((res) => res.json());
};

export const filterDataBySearch = (data, value) => {
  return data.filter(({ name }) => name.toLowerCase().includes(value));
};

export const activateCategory = (location) => {
  if (!location.pathname.includes(_category)) {
    return;
  }

  let category = location.pathname.split("/")[2];
  document.querySelector(`#${category}`)?.classList.add("active");
};

export const removeActiveClass = () => {
  document.getElementsByClassName(active)[0].classList.remove(active);
}
