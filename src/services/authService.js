export default {
  login: (userData) => {
    return fetch("http://localhost:8000/user/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else {
        return { isAuthenticated: false, user: { username: "", role: "" } };
      }
    });
  },

  register: (createUserData) => {
    return fetch("http://localhost:8000/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createUserData),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  },

  // logout : () => {
  //     await fetch("http://localhost:8000/user/register")
  //     .then((res)=>res.json())
  //     .then((data) => data)
  //     .catch((err) => console.log(err));
  // },

  isTokenValid: (token) => {
    return fetch("http://localhost:8000/user/tokenIsValid", {
      method: "POST",
      headers: {
        authorization: token,
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else {
        return res.json().then((data) => data);
      }
    });
  },
};
