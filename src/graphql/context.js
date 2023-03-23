import fetch from 'node-fetch';

export const context = () => {
  return {
    getUsers: (path = '/') => {
      const url = 'http://localhost:3000/users' + path;
      console.log('GET USERS, chamando com', path, url);
      return fetch(url);
    },
  };
};
