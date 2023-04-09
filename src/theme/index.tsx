import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider as MuiThemeProvider, ThemeOptions, createTheme } from '@mui/material';
import { merge } from 'lodash';
import React, { ReactNode, useMemo } from 'react';
import { prefixer } from 'stylis';
import { palette } from './palette';

interface IThemeProviderProp {
  children: ReactNode;
  mode?: string;
  option?: ThemeOptions;
  prefixCache?: string;
}

const cacheCallback = createCache({
  key: 'data-css',
  stylisPlugins: [prefixer],
});

const ThemeProvider = (props: IThemeProviderProp) => {
  const { children, mode = 'light', option } = props;
  const muiOption: ThemeOptions = {
    palette: mode === 'light' ? palette.light : palette.dark,
  };

  const theme = useMemo(() => createTheme(merge(muiOption, option)), [option, mode]);

  return (
    <CacheProvider value={cacheCallback}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
