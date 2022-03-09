import * as api from '../api/index';

export const createLodge = newLodge => async dispatch => {
  const { data } = await api.createLodge(newLodge);
  dispatch({ type: 'POST', payload: data.lodge });
};

export const getLodges = () => async dispatch => {
  const { data } = await api.getLodges();
  dispatch({ type: 'GET', payload: data });
};

export const updateLodge = (id, lodge) => async dispatch => {
  const { data } = await api.updateLodge(id, lodge);
  dispatch({ type: 'UPDATE', payload: data.lodge });
};

export const deleteLodge = id => async dispatch => {
  await api.deleteLodge(id);
  dispatch({ type: 'DELETE', payload: id });
};
