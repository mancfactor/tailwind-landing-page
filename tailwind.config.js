module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: '#6C63FF',
        brightRedLight: '#6C63FF',
        brightRedSupLight: '#6C63FF',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(245, 12%, 25%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}
