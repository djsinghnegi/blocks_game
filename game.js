const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2D");

const ROW = 20;
const COL = COLUMN = 10;
const SQ = squaresize = 20;

const VACANT = "white";

ctx.fillStyle = "red";
ctx.fillRect(0,0,50,50);
ctx.strokeStyle = "black";
ctx.strokeRect(0,0,50,50);