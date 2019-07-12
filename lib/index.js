const dontAskWhy = (arr) => {
  return arr
    .filter(word => !word.toLowerCase().includes('y'))
    .map(word => word = `is it ${word}?`);
};

module.exports = dontAskWhy;
