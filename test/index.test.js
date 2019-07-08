const dontAskWhy = require('../lib/index');

describe('don`t ask why', () => {
  it('removes all words from the list with an upper or lower case y', () => {
    const filtered = dontAskWhy(['hello', 'Yeti', 'me', 'happy']);
    expect(filtered).toEqual(['hello', 'me']);
  });
});
