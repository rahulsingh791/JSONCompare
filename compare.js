 function compareJSON(){
    let linput = document.getElementById("left-input").value;
    let rinput = document.getElementById("right-input").value;

    let lObject = JSON.parse(linput);
    let rObject = JSON.parse(rinput);

    if(compareObjects(lObject, rObject)){
        alert("Both JSON Objects are identical");
    }else{
        alert("JSON Objects differ");
    }


}

function compareObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length){
        return false;
    }

    keys1.sort();
    keys2.sort();

    for(key of keys1){
        let val1 = obj1[key];
        let val2 = obj2[key];

        let objBool = isItObject(val1) && isItObject(val2);
        if(objBool && !compareObjects(val1, val2) || !objBool && val1 !== val2){
            return false;
        }

    }

    return true;
}

function isItObject(obj) {
    return obj != null && typeof obj === 'object';
}

