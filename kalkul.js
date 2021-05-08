function KeruletNegyzet() {
  var NegyzetKeruletA = parseInt(document.getElementById("NegyzetKeruletA").value);

  var Kerulet = NegyzetKeruletA * 4;
  document.getElementById("Kerulet").value = Kerulet.toLocaleString() + " cm";
}

function TeruletNegyzet() {
  var NegyzetTeruletA = parseInt(document.getElementById("NegyzetTeruletA").value);

  var Terulet = NegyzetTeruletA * NegyzetTeruletA;
  document.getElementById("Terulet").value = Terulet.toLocaleString() + " cm2";
}

function KeruletTeglalap() {
  var TeglalapKeruletA = parseInt(document.getElementById("TeglalapKeruletA").value);
  var TeglalapKeruletB = parseInt(document.getElementById("TeglalapKeruletB").value);

  var Kerulet = 2 * (TeglalapKeruletA + TeglalapKeruletB);
  document.getElementById("Kerulet").value = Kerulet.toLocaleString() + " cm";
}

function TeruletTeglalap() {
  var TeglalapTeruletA = parseInt(document.getElementById("TeglalapTeruletA").value);
  var TeglalapTeruletB = parseInt(document.getElementById("TeglalapTeruletB").value);

  var Terulet = TeglalapTeruletA * TeglalapTeruletB;
  document.getElementById("Terulet").value = Terulet.toLocaleString() + " cm2";
}

function FelszinKocka() {
  var KockaFelszinA = parseInt(document.getElementById("KockaFelszinA").value);

  var Felszin = 6 * (KockaFelszinA * KockaFelszinA);
  document.getElementById("Felszin").value = Felszin.toLocaleString() + " cm2";
}

function TerfogatKocka() {
  var KockaTerfogatA = parseInt(document.getElementById("KockaTerfogatA").value);

  var Terfogat = KockaTerfogatA * KockaTerfogatA * KockaTerfogatA;
  document.getElementById("Terfogat").value = Terfogat.toLocaleString() + " cm3";
}

function FelszinTeglatest() {
  var TeglatestFelszinA = parseInt(document.getElementById("TeglatestFelszinA").value);
  var TeglatestFelszinB = parseInt(document.getElementById("TeglatestFelszinB").value);
  var TeglatestFelszinC = parseInt(document.getElementById("TeglatestFelszinC").value);

  var Felszin = 2 * (TeglatestFelszinA * TeglatestFelszinB + TeglatestFelszinA * TeglatestFelszinC + TeglatestFelszinB * TeglatestFelszinC);
  document.getElementById("Felszin").value = Felszin.toLocaleString() + " cm2";
}

function TerfogatTeglatest() {
  var TeglatestTerfogatA = parseInt(document.getElementById("TeglatestTerfogatA").value);
  var TeglatestTerfogatB = parseInt(document.getElementById("TeglatestTerfogatB").value);
  var TeglatestTerfogatC = parseInt(document.getElementById("TeglatestTerfogatC").value);

  var Terfogat = TeglatestTerfogatA * TeglatestTerfogatB * TeglatestTerfogatC;
  document.getElementById("Terfogat").value = Terfogat.toLocaleString() + " cm3";
}
