const dontAskWhy = require('../lib/index');

describe('don`t ask why', () => {
  it('removes all words from the list with an upper or lower case y and adds is it {word}?', () => {
    const filtered = dontAskWhy(['hello', 'Yeti', 'me', 'happy']);
    expect(filtered).toEqual(['is it hello?', 'is it me?']);
  });
});
