import { StringUtils, getStringInfo, stringToUpperCase } from '../app/Utils';

//Note: don't use Should
describe('Utils test suite', () => {
  // testing a class
  describe('StringUtils tests', () => {
    let sut: StringUtils;
    //using jest hooks
    //beforeAll and afterAll are used for integration test
    beforeEach(() => {
      sut = new StringUtils();
    });

    it('Return a right uppercase', () => {
      const actual = sut.toUpperCase('grow');
      expect(actual).toBe('GROW');
    });

    it('Throw an error if the argument is null or undefined', () => {
      function expectedErrow() {
        const actual = sut.toUpperCase('');
      }
      expect(expectedErrow).toThrow();
      expect(expectedErrow).toThrowError('Invalid argument!');
    });
    // a simpler way to test for error-arrow func
    it('Throw an error if the argument is null or undefined', () => {
      expect(() => {
        sut.toUpperCase('');
      }).toThrowError('Invalid argument!');
    });
    it.todo('heeeeyy');

    // another way to handle error-try-catch
    it('Throw an error if the argument is null or undefined', (done) => {
      try {
        sut.toUpperCase('');
        //this next line is very important because, if the error instance is not
        //checked in the codebase, this will still pass
        //this next line handles this case
        done('GetStringInfo should throw error for invalid string');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid argument!');
        done();
      }
    });
  });

  // parameterized testing
  describe('ToUpperCase', () => {
    it.each([
      { input: 'Blessing', expected: 'BLESSING' },
      { input: 'cook', expected: 'COOK' },
      { input: 'Pray', expected: 'PRAY' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = stringToUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe('getStringInfo for arg Agnes should', () => {
    it('return the right length', () => {
      const actual = getStringInfo('Agnes');
      expect(actual.characters.length).toBe(5);
      //alternative
      expect(actual.characters).toHaveLength(5);
    });
    it('return the correct lowercase', () => {
      const actual = getStringInfo('Agnes');
      expect(actual.lowerCase).toBe('agnes');
    });
    it('return the correct uppercase', () => {
      const actual = getStringInfo('Agnes');
      expect(actual.upperCase).toBe('AGNES');
    });
    it('return right characters', () => {
      const actual = getStringInfo('Agnes');
      expect(actual.characters).toEqual(['A', 'g', 'n', 'e', 's']);
      expect(actual.characters).toContain<string>('A');
      expect(actual.characters).toEqual(
        expect.arrayContaining(['n', 'e', 's', 'A', 'g'])
      );
    });
    it('return the defined actual info', () => {
      const actual = getStringInfo('Agnes');
      //comparing objects you have to use toEqual
      //toBe should be used as a matcher for primitive types
      expect(actual.extraInfo).toEqual({});
      // the three does the same thing: checking for defined or undefined object

      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    });
  });
});
