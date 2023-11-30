import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import resolveConfig from 'tailwindcss/resolveConfig';

// Import tailwind configuration directly to avoid using 'require'
import tailwindConfig from '../../tailwind.config';

// Resolve tailwind configuration
const fullConfig = resolveConfig(tailwindConfig) as unknown as {
  theme: {
    colors: {
      primary: string;
      white: string;
      secondary: string;
    };
  };
};

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: fullConfig.theme.colors.primary[50],
    },
    secondary: {
      main: fullConfig.theme.colors.primary[100],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: fullConfig.theme.colors.white,
    },
  },
});

export default theme;
