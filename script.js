function computeint() {
  var p = document.getElementById("principal").value;
  var r = document.getElementById("rate").value;
  var t = document.getElementById("years").value;
  var si = (p * t * r) / 100;
  var total = p + si;
  console.log(si);
  console.log(p);
  console.log(r);
  console.log(total);
  document.getElementById("amt").innerHTML = p;
  document.getElementById("intr").innerHTML = r;
  document.getElementById("tot").innerHTML = total;
  document.getElementById("ys").innerHTML = 2022 + t;
}

function setup() {
  document.getElementById("rt").innerHTML = document.getElementById(
    "rate"
  ).value;
}

        
