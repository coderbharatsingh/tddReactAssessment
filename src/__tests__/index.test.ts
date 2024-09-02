import add from '../utils/calculator';
 
describe('String Calculator TDD', () => {
  it('a string of comma-separated numbers test', () => {
      expect(add('')).toEqual(0);
      expect(add('1')).toEqual(1);
      expect(add('1,5')).toEqual(6);
  })

  it('a string of long amount of comma-separated numbers test', () => {
      expect(add('1,3,5,7,11,13')).toEqual(40);
      expect(add('25,34,1,200,3,24,67,34,22,100')).toEqual(510);
      expect(add('0,3,32,12,111,456,232,2,11,67,3,93,54,75,88,43,88,100,23,21,55')).toEqual(1569);
  })

  it('handle new line in place of comma test', () => {
      expect(add(`1
          2,3`)).toEqual(6);
      expect(add(`4
          8,7
          1
          6`)).toEqual(26);
  })

  it('custom delimiter test', () => {
      expect(add(`//;
          1;2`)).toEqual(3);
      expect(add(`//$
          34$21$12`)).toEqual(67);
  })

  it('negative number exception test', () => {
      expect(() => add(`-2`)).toThrow('negative numbers not allowed -2');    
      expect(() => add(`4,1,-11,3`)).toThrow('negative numbers not allowed -11');    
  })

  it('multiple negative number exception test', () => {
      expect(() => add(`1,5,-4,11,-7,23`)).toThrow('negative numbers not allowed -4,-7');    
      expect(() => add(`-5,21,33,-72,-1`)).toThrow('negative numbers not allowed -5,-72,-1');    
  })
});
