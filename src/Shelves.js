export const states = {
  none: 'None',
  read: 'Read',
  wantToRead: 'Want to Read',
  currentlyReading: 'Currently Reading'
};

/**
 * Get shelves as options.
 * @returns {Array.<{ value: string, label: string }>}
 */
export const getOptions = () => {
  return Object.entries(states).map(
    ([ property, value ]) => ({
      value: property,
      label: value
    })
  );
};
