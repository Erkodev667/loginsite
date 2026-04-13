const btn = document.querySelector(".btn");

btn.onclick = function () {
  event.preventDefault();

  const usName = document.getElementById("username");
  const name = usName.value;

  const userPass = document.getElementById("password");
  const passwordUs = userPass.value;

  console.log("Введенное имя:", name);
  console.log("пароль:", passwordUs);

  login(name, passwordUs);
};

function login(name, password) {
  const res = axios
    .post(
      "https://dummyjson.com/auth/login",
      {
        username: name,
        password: password,
        expiresInMins: 30,
      },
      {
        withCredentials: true,
      },
    )
    .then((res) => {
      let data = res.data;
      let keyAcc = "key1";
      let keyRef = "key2";
      document.cookie =
        encodeURIComponent(keyAcc) + "=" + encodeURIComponent(data.accessToken);
      document.cookie =
        encodeURIComponent(keyRef) +
        "=" +
        encodeURIComponent(data.refreshToken);
      window.location = "info.html";
    })
    .catch((err) => {
      alert(err);
    });
}
