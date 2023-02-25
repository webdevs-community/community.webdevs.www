/*
 * Tailwind Plugins AddComponents Settings
 */

module.exports = {
  '.container': {
    width: '100%',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@screen md': {
      paddingLeft: '3rem',
      paddingRight: '3rem',
    },
    '@screen xl': {
      maxWidth: 'calc(theme(screens.xl) + 6rem)',
    },
    '@screen 2xl': {
      maxWidth: 'calc(theme(screens.2xl) + 10rem)',
      paddingLeft: '5rem',
      paddingRight: '5rem',
    },
  },
  '.container-full': {
    width: '100%',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    '@screen md': {
      paddingLeft: '3rem',
      paddingRight: '3rem',
    },
    '@screen 2xl': {
      paddingLeft: '5rem',
      paddingRight: '5rem',
    },
  },
};
