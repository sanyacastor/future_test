export const getUsers = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    throw new Error('Ошибка загрузки пользователей с сервера');
  }
};
