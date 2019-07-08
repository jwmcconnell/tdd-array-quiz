const dontAskWhy = (arr) => {
  const filtered = arr.filter(word => {
    return !word.toLowerCase().includes('y');
  });
  const altered = filtered.map(word => {
    return word = `is it ${word}?`;
  });
  return altered;
};

module.exports = dontAskWhy;
