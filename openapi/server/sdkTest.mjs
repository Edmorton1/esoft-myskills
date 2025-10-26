import {ApiClient, UsersApi} from '../mysdk/dist/index.js';

const client = new ApiClient();
const usersApi = new UsersApi(client);

const user = new Promise((res) => {
  usersApi.usersIdGet(23, (err, users, response) => {
    res(users);
  })
})

console.log(await user);

const users = new Promise((res) => {
  usersApi.usersGet((err, users, response) => {
    res(users);
  })
})

console.log(await users);

const postedUser = new Promise((res) => {
  usersApi.usersPost({
    "name": "vasyok2323",
    "email": "q@w.er",
    "password": "1231243434343"
  }, (err, users, response) => {
    res(users);
  })
})

console.log(await postedUser);