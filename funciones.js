function seconds(string) {
    for (let seg = 0; seg <= 59; seg++) {
        console.log(`${string} ${seg} seg`);
        
    }
}

function minutes(string) {
    for (let min = 0; min <= 59; min++) {
        seconds(`${string }${min} min`);
        
    }
}

function hours() {
    let string = "";
    for (let hour = 0; hour <= 23; hour++) {
        string = `${hour} hrs `
        minutes(string);
        string = "";
        
    }
}