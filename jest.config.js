/** @type {import('jest').Config} */
const config = {
    transform: {
      '\\.[jt]sx?$': 'babel-jest',
      '\\.css$': 'some-css-transformer',
    },
  };
  
  module.exports = config;