module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    moduleFileExtensions: ['js', 'jsx'],
    testPathIgnorePatterns: ['/node_modules/', '/lib/']
  };
  