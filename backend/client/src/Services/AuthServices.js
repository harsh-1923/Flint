import { API } from "../config";
export default {
  signup: (user) => {
    return fetch(`${API}/user/create`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else
        return {
          isAuthenticated: false,
          user: { username: "", email: "", contact: "" },
        };
    });
  },
  login: (user) => {
    return fetch(`${API}/user/login`, {
      method: "post",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      return res.json().then((data) => data);
    });
  },
};
