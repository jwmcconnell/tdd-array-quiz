const dontAskWhy = (arr) => {
  const filtered = arr.filter(word => {
    return !word.toLowerCase().includes('y');
  });
  return filtered;
};

module.exports = dontAskWhy;
