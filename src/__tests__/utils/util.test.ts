import { util } from '../../utils';

const ARRAY = [
  { _id: 1, name: 'test1', age: 10, common: 1 },
  { _id: 2, name: 'test2', age: 20, common: 1 },
  { _id: 3, name: 'test3', age: 30, common: 2 },
  { _id: 4, name: 'test4', age: 40, common: 2 },
  { _id: 5, name: 'test5', age: 50, common: 2 }
];

describe('Util', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('It should pass converting array into hash using _id by key', (done) => {
    const hash = util.convertArrayToHash(ARRAY, '_id', false);

    expect(Object.keys(hash).length).toBe(5);
    expect(hash[ARRAY[0]._id]._id).toBe(ARRAY[0]._id);
    expect(hash[ARRAY[0]._id].name).toBe(ARRAY[0].name);
    expect(hash[ARRAY[0]._id].age).toBe(ARRAY[0].age);
    done();
  });

  it('It should pass converting array into hash using name by key', (done) => {
    const hash = util.convertArrayToHash(ARRAY, 'name', false);

    expect(Object.keys(hash).length).toBe(5);
    expect(hash[ARRAY[0].name]._id).toBe(ARRAY[0]._id);
    expect(hash[ARRAY[0].name].name).toBe(ARRAY[0].name);
    expect(hash[ARRAY[0].name].age).toBe(ARRAY[0].age);
    done();
  });

  it('It should pass converting array into hash using age by key', (done) => {
    const hash = util.convertArrayToHash(ARRAY, 'age', false);

    expect(Object.keys(hash).length).toBe(5);
    expect(hash[ARRAY[0].age]._id).toBe(ARRAY[0]._id);
    expect(hash[ARRAY[0].age].name).toBe(ARRAY[0].name);
    expect(hash[ARRAY[0].age].age).toBe(ARRAY[0].age);
    done();
  });

  it('It should pass converting array into hash using common prop by key and flag array', (done) => {
    const hash = util.convertArrayToHash(ARRAY, 'common', true);

    expect(Object.keys(hash).length).toBe(2);
    expect(Array.isArray(hash[ARRAY[0].common])).toBe(true);
    expect(Array.isArray(hash[ARRAY[2].common])).toBe(true);
    expect(hash[ARRAY[0].common].length).toBe(2);
    expect(hash[ARRAY[2].common].length).toBe(3);
    done();
  });
});
