const hideEmail = (str) => {
  let email = str;
  let hiddenEmail = "";
  for (let i = 0; i < email.length; i++) {
    if (i > 4 && i < email.indexOf("@")) {
      hiddenEmail += ".";
    } else {
      hiddenEmail += email[i];
    }
  }
  return hiddenEmail;
};

console.log(hideEmail("robin_singh@example.com"));
