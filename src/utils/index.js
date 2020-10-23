import _ from 'lodash';

export const toggleItemInArray = (array, item) => _.xor(array, [item]);
