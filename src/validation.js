const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\._-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validate(field, regex) {
  const { value } = field;
  regex.test(value)
    ? (field.className = "--valid")
    : (field.className = "--invalid");
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    const { value } = event.target.attributes.name;
    validate(event.target, patterns[value]);
  });
});
