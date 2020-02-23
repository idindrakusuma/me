module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    /**
     * We need re-mapping the custom modules in JEST
     * So, we need add the pattern in moduleNameMapper
     * Now, we add `@`, `@helpers`, `@components` also `@pages`
     * */
    '@/(.*)$': '<rootDir>/src/$1',
    '@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@aseets/(.*)$': '<rootDir>/src/assets/$1',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public', '<rootDir>.*/cypress'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/loadershim.js'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
};
