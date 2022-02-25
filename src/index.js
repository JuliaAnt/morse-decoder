const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let str = "";
  for (let i = 0; i < expr.length; i = i + 10) {
    str = str + expr.slice(i, i + 10) + ",";
  }

  let arr = str.split(",");
  let subarr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j = j + 2) {
      subarr.push(arr[i].slice(j, j + 2));
    }
  }

  for (i = 0; i < subarr.length; i++) {
    if (subarr[i] === "00") {
      subarr[i] = "*";
    } else if (subarr[i] === "10") {
      subarr[i] = ".";
    } else if (subarr[i] === "11") {
      subarr[i] = "-";
    } else {
      subarr[i] = " ";
    }
  }
  let newarr = [];
  let size = 5;
  let subsubarr = [];
  for (i = 0; i < subarr.length / size; i++) {
    subsubarr[i] = subarr.slice(i * size, i * size + size);
    for (j = 0; j < subsubarr[i].length; j++) {
      let elem = subsubarr[i][j];
      subsubarr[i] = subsubarr[i].filter((elem) => elem !== "*");
      newarr[i] = subsubarr[i].join("");
    }
  }
  let newStr = "";
  for (i = 0; i < newarr.length; i++) {
    if (newarr[i] === "     ") {
      newStr = newStr + " ";
    } else {
      newStr = newStr + MORSE_TABLE[newarr[i]];
    }
  }
  return newStr;
}

module.exports = {
  decode,
};
