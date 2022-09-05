var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log("perkenalkan nama saya " + nama + " nomor urut " + a + " sekarang sedang mengikuti " + b + " berasal dari " + asal);
}

// 1b. Change the if condition into false.
if (terdaftar === false) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;

// 1a.Take value of index 2 on the lengkap_arr.
console.log("array = " + lengkap_arr[2]);

console.log("a adalah = " + a);
console.log("b adalah = " + b);

// 1c. Call the "perkenalan" function.
perkenalan();
