import { common as muiCommonColor, grey } from '@mui/material/colors';
import { createAlphaColor } from './color';
import { PaletteOptions } from '@mui/material';

const greyColor = createAlphaColor(grey);

const primaryColor: PaletteOptions['primary'] = {
  main: '#00AB55',
  light: '#5BE584',
  dark: '#007B55',
  contrastText: muiCommonColor.white,
};

const secondaryColor: PaletteOptions['secondary'] = {
  main: '#3366FF',
  light: '#84A9FF',
  dark: '#1939B7',
  contrastText: muiCommonColor.white,
};

const infoColor: PaletteOptions['info'] = {
  main: '#00B8D9',
  light: '#61F3F3',
  dark: '#006C9C',
  contrastText: muiCommonColor.white,
};

const successColor: PaletteOptions['success'] = {
  main: '#36B37E',
  light: '#86E8AB',
  dark: '#1B806A',
  contrastText: muiCommonColor.white,
};

const warningColor: PaletteOptions['warning'] = {
  main: '#FFAB00',
  light: '#FFD666',
  dark: '#B76E00',
  contrastText: muiCommonColor.white,
};

const errorColor: PaletteOptions['error'] = {
  main: '#FF5630',
  light: '#FFAC82',
  dark: '#B71D18',
  contrastText: greyColor[800],
};

const paletteOptions: PaletteOptions = {
  primary: primaryColor,
  secondary: secondaryColor,
  info: infoColor,
  warning: warningColor,
  success: successColor,
  error: errorColor,
  common: {
    white: muiCommonColor.white,
    black: muiCommonColor.black,
  },
  divider: greyColor['500_24'],
  grey: greyColor,
  background: {
    default: muiCommonColor.white,
    paper: muiCommonColor.white,
  },
};

const palette: { light: PaletteOptions; dark: PaletteOptions } = {
  light: {
    mode: 'light',
    ...paletteOptions,
  },
  dark: {
    ...paletteOptions,
    background: {
      default: greyColor[800],
      paper: greyColor[800],
    },
    mode: 'dark',
  },
};

export { palette };
