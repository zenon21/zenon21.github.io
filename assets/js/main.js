/* @param {String} elementID - ID of element*/
hideElement = elementID => {
  let element = document.getElementById(elementID);

  element.style.display = 'none';
  element.style.opacity = 0;
};

/* @param {String} element - ID of element
 * @param {String} element - display style. Defaults to 'block'
 */
showElement = (elementID, displayStyle = 'block') => {
  let element = document.getElementById(elementID);

  element.style.display = displayStyle;
  element.style.opacity = 1;
};

/* @param {String} elem1ID - ID of element to be hidden
 * @param {String} elem2ID - ID of element to be revealed
 * @param {String} displayStyle - display style; defualts to 'block'
 */
toggleElements = (elem1ID, elem2ID, displayStyle = 'block') => {
  hideElement(elem1ID);
  showElement(elem2ID, displayStyle);
};
