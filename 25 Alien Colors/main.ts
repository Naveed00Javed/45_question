let alien_variable = `green`;

// passing version
if (alien_variable=== `green`){
    console.log(`player just earned 5 points.`);
}
else{
    console.log(`no points earned`);
}
// failing version

alien_variable = `yellow`;
if (alien_variable=== `green`){
    console.log(`player just earned 5 points.`);
}
else{
    console.log(`{}`);
}
