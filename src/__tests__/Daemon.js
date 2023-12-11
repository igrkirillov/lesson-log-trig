import Daemon from '../Daemon';

describe('Daemon module', () => {
  test ('all fields', () => {
    const name = 'AB';
    const ch = new Daemon(name);
    expect(ch).toEqual({
      name,
      type: 'Daemon',
      health: 100,
      level: 1,
      _attack: 10,
      defence: 40,
      _stoned: false,
      distance: 1
    });
  })
})