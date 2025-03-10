function createHelloWorld(){
    return function(){
        return "Hello World";
    }
}
const out =createHelloWorld();
out();