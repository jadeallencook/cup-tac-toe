import createPlayer from './createPlayer';

describe('Create Player', () => {
  it('should return new player object', () => {
    expect(createPlayer('Bob', '#F00')).toStrictEqual({
      name: 'Bob',
      color: '#F00',
      cups: [4, 3, 2, 1],
    });
  });
});
