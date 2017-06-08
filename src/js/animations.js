function myMove() {
  console.log("Mouse over");
  ("#work").mouseover(function(){

    var elem = document.getElementById("box-animate");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  })

}


// #work .boxes .box {
//   width: 100px;
//   height: 100px;
//   overflow: hidden;
//   position: relative;
//   border-radius: 100%;
//   -webkit-animation: mymove 5s infinite; /* Safari 4.0 - 8.0 */
//    animation: mymove 5s infinite;
//    -webkit-animation-timing-function: ease;
//    animation-timing-function: ease;
//     animation-iteration-count: 1;
// }
//   /* Safari 4.0 - 8.0 */
// @-webkit-keyframes mymove {
//     from {left: 0px;}
//     to {left: 300px;}
// }
//
// /* Standard syntax */
// @keyframes mymove {
//     from {left: 0px;}
//     to {left: 300px;}
// }
