// проверка на принадлежность типу

interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.width;
  } else {
    return shape.width * shape.width;
  }
}

// === 2 ===

interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

class Square implements Square {
  constructor(public width: number) {}
}

class Rectangle extends Square implements Rectangle {
  constructor(public width: number, public height: number) {
      super(width);
  }
}

function calcArea(shape: Shape) {
  if (shape instanceof Rectangle) {
      return shape.width * shape.height;
  } else {
      return shape.width ^ 2;
  }
}
