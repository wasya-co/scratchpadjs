
/**
 * Style Constants
 */
 const S = {
  // Twofold layout
  borderWidth: '10px',
  bottomDrawerClosedHeight: '20px',
  bottomDrawerOpenHeight: '115px',
  breadcrumbsHeight: '30px',

  thinBorderWidth: '2px',
  thinBorderRadius: '5px',
}

const lightTheme = {
  ...S,
  thinBorder: '2px solid black',
  colors: {
    text: 'black',
    background: '#dedede',
    blue: '#6aa3e9',
    darkGrey: '#605d5d',
    lightGrey: '#988b8b',
    red: 'red',
    border: 'black',
    cardBackground: 'white'
  }
}

const darkTheme = {
  ...S,
  thinBorder: '2px solid white',
  colors: {
    text: 'white',
    background: '#292929',
    blue: '#73b0fa',
    darkGrey: '#b3afaf',
    lightGrey: '#4a4343',
    red: '#eb83a8',
    border: 'white',
    cardBackground: '#1a1a1a'
  }
}

export default {
  lightTheme,
  darkTheme
}