import * as config from './config';

export const loadUsers = async (amount = 10) => {
  try {
    const response = await fetch(
      `${config.BASE_URL}?results=${amount}&seed=${config.SEED}`
    );
    const users = await response.json();
    return users;
  } catch (e) {
    throw e;
  }
};
