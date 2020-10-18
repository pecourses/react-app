import * as config from './config';
import CONSTANTS from '../CONSTANTS';

export const loadUsers = async (
  amount = CONSTANTS.RESULTS_PER_PAGE,
  page = 1
) => {
  try {
    const response = await fetch(
      `${config.BASE_USERS_URL}?results=${amount}&seed=${config.SEED}&page=${page}`
    );
    const users = await response.json();
    return users;
  } catch (e) {
    throw e;
  }
};

export const loadPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  } catch (e) {
    throw e;
  }
};
