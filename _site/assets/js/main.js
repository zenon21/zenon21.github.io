/* Removes element with display none & slow fade
 * @param {String} elementID - ID of element
 * @param {String} duration - duration of fade animation
 */
removeElementWithFade = (elementID, duration = '1s') => {
  let element = document.getElementById(elementID);

  element.style.animation = `fadeOut ${duration} ease-in`;
  element.style.display = 'none';
};

/* Slowly fades element into view
 * @param {String} element - ID of element
 * @param {String} element - display style. Defaults to 'block'
 * @param {String} duration - duration of fade animation
 */
fadeInElement = (elementID, displayStyle = 'block', duration = '1s') => {
  let element = document.getElementById(elementID);

  element.style.animation = `fadeIn ${duration} ease-in`;
  element.style.display = displayStyle;
};

/* @param {String} elem1ID - ID of element to be hidden
 * @param {String} elem2ID - ID of element to be revealed
 * @param {String} displayStyle - display style; defualts to 'block'
 */
toggleElements = (elem1ID, elem2ID, displayStyle = 'block') => {
  removeElementWithFade(elem1ID);
  fadeInElement(elem2ID, displayStyle);
};
