function getCookie(name) {
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? m[2] : null;
}

const accessToken = getCookie("key1");

async function getInfo() {
  axios
    .get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);

      document.querySelector(".user_name").textContent =
        "Name: " + res.data.firstName;
      document.querySelector(".info_span").textContent =
        "Email: " + res.data.email;
    })
    .catch((err) => console.log(err));
}

getInfo();

// window.innerHTML
