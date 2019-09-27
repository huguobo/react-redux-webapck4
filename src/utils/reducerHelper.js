import curry from 'ramda/src/curry';
import mergeDeepRight from 'ramda/src/mergeDeepRight';


export const reducerCreator = (initialState, handles) => (
  (state = initialState, { type, payload }) => {
    if (type in handles) return handles[type](state, payload);
    return state;
  }
);


export const appendItemsTo = curry((prop, object, items) => ({
  ...object,
  [prop]: object[prop].concat(items),
}));

export const appendItemTo = curry((prop, object, item) => ({
  ...object,
  [prop]: [...object[prop], item],
}));

export const removeItemFrom = curry((prop, object, index) => ({
  ...object,
  [prop]: object[prop].filter((v, i) => i !== index),
}));

export const updateArrayItemOf = curry((prop, object, { index, fields }) => {
  const arr = [...object[prop]];
  arr[index] = mergeDeepRight(arr[index], fields);
  return { ...object, [prop]: arr };
});


export const updateObject = curry((prop, state, payload) => ({
  ...state,
  [prop]: { ...state[prop], ...payload },
}));
