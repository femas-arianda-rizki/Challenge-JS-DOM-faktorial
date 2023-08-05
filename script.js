const faktorial = (n) => {
  let hasil = 1;
  for (let i = n; i > 0; i--) {
    hasil *= i;
  }
  return hasil;
};

const hitungFaktorial = () => {
  const input = document.getElementById("inputNumber").value;
  const result = faktorial(parseInt(input));
  document.getElementById("result").innerHTML = `Hasil:${result}`;
};
