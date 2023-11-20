const legacyFontSizes = {
  extraLarge: {
    replacementName: 'gigantic',
    replacementValue: 'gigantic',
  },
  extraSmall: {
    replacementName: 'tiny',
    replacementValue: 'tiny',
  },
};

const fontSizes = {
  gigantic: 'gigantic',
  large: 'large',
  medium: 'medium',
  small: 'small',
  tiny: 'tiny',
};

const proxyOptions = {
  get: (target, propName, receiver) => {
    if (propName in legacyFontSizes) {
      console.warn(
        `${propName} is depracted`,
        `Use ${legacyFontSizes[propName].replacementName} instead`
      );
      return legacyFontSizes[propName].replacementValue;
    }

    return Reflect.get(target, propName, receiver);
  },
};

const proxiedFontSizes = new Proxy(fontSizes, proxyOptions);

export default proxiedFontSizes;
