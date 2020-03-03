const gameUtils = {
  getNumbers: objectsList => objectsList.filter(object => !isNaN(object)),
  getNotNumbers: objectsList => objectsList.filter(object => isNaN(object))
};

export default gameUtils;
