let object = {propriedade1 : 1, propriedade2 : 2, propriedade3 : 3, propriedade4 : 4};
let array = ['a', 'b', 'c', 'd'];
function for_in(obj){
    for (x in obj){
        console.log(x);
    };
}
function for_off(arr){
    for (n of arr){
        console.log(n);
    };
}

for_in(object);
for_off(array);