import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.pug');
}

console.log('webpack starterkit');
