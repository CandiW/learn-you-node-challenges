function add(obj){
    let array = [];
    for(let i = 2; i<obj.length; i++){
        array.push(Number(obj[i]));
        array.reduce((a,b) => {
            console.log(a + b);
        });
    }
}
add(process.argv);