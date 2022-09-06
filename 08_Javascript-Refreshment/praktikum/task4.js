let bdays = ["10-17", "05-19", "20-19"];

// Changes "-" sign into "/" sign
for (let i = 0; i < bdays.length; i++) {
  bdays[i] = bdays[i].replace("-", "/");
}

console.log(bdays);
