let aSide, bSide, cSide;

document.getElementById("EnterBtn").onclick = function () {
    aSide = document.getElementById("aSide").value;
    bSide = document.getElementById("bSide").value;
    cSide = document.getElementById("cSide").value;

    console.log(aSide);
    console.log(bSide);
    console.log(cSide);

    //ensure user left 1 input blank
    let sidesBlank = 0;
    if(aSide === ""){
        sidesBlank++;
    }
    if(bSide === ""){
        sidesBlank++;
    }
    if(cSide === ""){
        sidesBlank++;
    }

    if(sidesBlank === 1) {
        if(aSide === '') {
            document.getElementById("note").textContent = `Side a = ${GetSide(bSide, cSide)}`;
        }
        if(bSide === '') {
            document.getElementById("note").textContent = `Side b = ${GetSide(aSide, cSide)}`;
        }
        if(cSide === '') {
            document.getElementById("note").textContent = `Side c = ${GetHypotenuse(aSide, bSide)}`;
        }
    }
    else {
        document.getElementById("note").textContent = 'Invalid input, please leave one input blank.';
    }
}

function GetHypotenuse (side1, side2) {
    return Math.sqrt((side1 * side1) + (side2 * side2));
}

function GetSide (side1, hypotenuse) {
    return Math.sqrt((hypotenuse * hypotenuse) - (side1 * side1));
}