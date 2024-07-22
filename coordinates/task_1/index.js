let coordinates = elem.getBoundingClientRect();

let TopLeftCorner = [coordinates.left, coordinates.top];
let BottomRightCorner = [coordinates.right, coordinates.bottom];
let TopLeftInnerCorner = [coords.left + field.clientLeft, coords.top + field.clientTop];