import * as config from './config';

export const loadUsers = async (amount = 10, page = 1) => {
  try {
    const response = await fetch(
      `${config.BASE_URL}?results=${amount}&seed=${config.SEED}&page=${page}`
    );
    const users = await response.json();
    return users;
  } catch (e) {
    throw e;
  }
};
