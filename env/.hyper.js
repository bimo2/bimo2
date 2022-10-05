// See https://hyper.is#cfg for supported options

const LIGHT = '255, 255, 255';
const DARK = '0, 0, 0';
const ACCENT = '242, 255, 0';

module.exports = {
  config: {
    updateChannel: 'stable',
    fontSize: 12.5,
    fontFamily: '"SF Mono", Menlo, monospace',
    fontWeight: 'normal',
    fontWeightBold: 'bold',
    lineHeight: 1.05,
    letterSpacing: 0,
    cursorColor: `rgba(${ACCENT}, 1)`,
    cursorAccentColor: `rgba(${DARK}, 1)`,
    cursorShape: 'BLOCK',
    cursorBlink: true,
    foregroundColor: `rgba(${LIGHT}, 1)`,
    backgroundColor: `rgba(${DARK}, 0.65)`,
    selectionColor: `rgba(${ACCENT}, 0.25)`,
    borderColor: `rgba(${DARK}, 0)`,
    padding: '12px 16px',
    colors: {
      black: '#000000',
      red: '#FC0328',
      green: '#2CF246',
      yellow: '#F2FF00',
      blue: '#00A6FF',
      magenta: '#FF4FAA',
      cyan: '#30E6E6',
      white: '#FFFFFF',
      lightBlack: '#000000',
      lightRed: '#FC0328',
      lightGreen: '#2CF246',
      lightYellow: '#F2FF00',
      lightBlue: '#00A6FF',
      lightMagenta: '#FF4FAA',
      lightCyan: '#30E6E6',
      lightWhite: '#FFFFFF',
    },
    shell: 'zsh',
    shellArgs: ['--login'],
    env: {},
    defaultSSHApp: true,
  },
  plugins: [],
  localPlugins: [],
  keymaps: {},
};
