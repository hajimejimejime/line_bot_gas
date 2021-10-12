function divideArrIntoPieces(arr, n) {
  var arrList = [];
  var idx = 0;
  while (idx < arr.length) {
    arrList.push(arr.splice(idx, idx + n));
  }
  return arrList;
}

function divide_array_every_num(arr, num) {
  var ret_arr = [];
  var index = 0;
  while (index < arr.length) {
    ret_arr.push(arr.splice(index, index + num));
  }
  return ret_arr;
}

function run_tes() {
  var message_list = ["A", "B", "C", "D", "E", "F", "G"];

  var arr_list = divide_array_every_num(message_list, 5);
  Logger.log(arr_list);
}
