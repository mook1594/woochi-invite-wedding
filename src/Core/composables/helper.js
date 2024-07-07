export const getImage = (path) => {
      return new URL(`../../Weather/assets/images/icons/${path}.png`, import.meta.url).href
  }