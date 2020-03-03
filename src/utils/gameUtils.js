const gameUtils = {
  getNumbers: objectsList => objectsList.filter(object => !isNaN(object)),
  getNotNumbers: objectsList => objectsList.filter(object => isNaN(object)),
  getCheckedPrizes: prizes => prizes.filter(prize => prize.checked)
};

export default gameUtils;
