import axios from "axios";
const BASE_URL = "https://ecom-sr1.onrender.com//api/";
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)?.currentUser?.accessToken|| "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
// const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWNkYjA2NGEzOWNmMjUzOGI4MGRjYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzM3NjQ4OSwiZXhwIjoxNjY3NjM1Njg5fQ.aubk2M1CRuGfK3cqLu4-FxXY21v8Q9svQeKfG4e1Ylg"

console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});