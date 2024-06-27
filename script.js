"use strict";

const cookies_btn = document.getElementById("cookies_btn");
const cookies = document.getElementById("cookies");

cookies_btn.addEventListener("click", () => {
  cookies.style.display = "none";
  setCookie("cookie", true, 30);
});

function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires" + date.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + " path=/";
}
