/* numeric enum */

enum Enum {
  No,
  Yes,
}

function respond(recipient: string, message: Enum): void {
  if (message === Enum.No) {

  }
}

function getVal (){
  return 3
}

enum Sample {
  B,
  A = getVal()
}

respond("Princess Caroline", Enum.No)

/* numeric enum */

/* enum const vs computed member */

  enum FileAccess {
    // constant members
    None,
    Read    = 1,
    Write   = 0,
    ReadWrite  = Read / Write,
    // computed member
    G = "123".length
}


/* enum const vs computed member  */


/* use of enum with interface */
  enum ShapeKind {
    Circle,
    Square
  }

  interface Circle {
    kind: ShapeKind.Circle
    radius: number
  }

  interface Square {
    kind: ShapeKind.Square
    sideLength: number
  }

  let c : Circle = {
    radius: 4,
    kind: ShapeKind.Circle //  ShapeKind.Square will give error
  }

/* use of enum with interface */


/* enum as union type */ 
enum Answer {
  Yes,
  No
}

function checkResponse (ans: Answer) {
  //if (ans !== Answer.Yes || ans !== Answer.No) {

  //}
}
/* enum as union type */


/* enum passed as objects */
  enum E {
    X, Y, Z
  }

  function f(obj: { X: number }) {
    return obj.X;
  }

  f(E)

/* enum passed as objects */


/* reverse mappings */
enum Enum1 {
  A
}

let a = Enum1.A
let val = Enum1[a]

/* reverse mappings */

/* const enums */

const enum Color {
  RED,
  YELLOW
}

let myDirections = [Color.RED, Color.YELLOW]

/* const enums */