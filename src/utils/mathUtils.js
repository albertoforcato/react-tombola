const mathUtils = {
  // create an array of numbers between min and max (right edge excluded)
  rangeRightEdgeExcluded: (min, max) =>
    [...Array(max - min)].map((_, i) => i + min),
  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  chunkArray: (array, chunk_size) => {
    let results = [];
    let c = [...array];
    while (c.length) {
      results.push(c.splice(0, chunk_size));
    }
    //console.log(results);
    return results;
  },

  randomNumber: (array) => {
      return array[Math.floor(Math.random() * array.length)];
  }
};

export default mathUtils;