import axios from 'axios';

const lodgesUrl = 'http://localhost:8000/lodges';
export const createLodge = lodge => axios.post(lodgesUrl, lodge);
export const getLodges = () => axios.get(lodgesUrl);
export const updateLodge = (id, lodge) =>
  axios.patch(`${lodgesUrl}/${id}`, lodge);
export const deleteLodge = id => axios.delete(`${lodgesUrl}/${id}`);
