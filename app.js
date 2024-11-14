for (let i = 1; i <=100; i++) {
    let output = i;
    if (i % 15 === 0) {
        output += "Coca cola";
    } else if (i % 3 === 0) {
        output += "Coca";
    } else if (i % 5 === 0) {
        output += "Cola"
    }
    console.log(output);
    
}

