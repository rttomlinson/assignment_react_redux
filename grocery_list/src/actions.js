export const ADD_ITEM = 'ADD_ITEM';
export const SET_PURCHASED_FILTER = 'SET_PURCHASED_FILTER';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_SORT = 'SET_SORT';

export function addItem(data) {
  return {
    type: ADD_ITEM,
    data: {
      ...data,
      purchased: false,
      category: data.category ? data.category : 'Misc',
      price: data.price ? data.price : '$10'
    }
  };
}

export function setPurchasedFilter(data) {
  return {
    type: SET_PURCHASED_FILTER,
    data
  };
}

export function setCategoryFilter(data) {
  return {
    type: SET_CATEGORY_FILTER,
    data
  };
}

export function setSort(data) {
  return {
    type: SET_SORT,
    data
  };
}
