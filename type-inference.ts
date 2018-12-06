/* Best common type */

let a = [0,1,'1', '2', '3'] // infered as (number | string) [] union type

function logging (a: (number | string) [] ) : number | string {
  return a[0]
}

logging(a)

/* Best common type */

/* Contextual types */
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.offsetX)
}

window.onmousedown = function (mouseEvent : any) { // explicity say any type
  console.log(mouseEvent.clickTime)
}


var obj = {
  a: 2
}

function assign () {
  return 2
}

obj.a = assign()

var arr = [1,2,'1']

arr[0] = 'abc'

/* Contextual types */
