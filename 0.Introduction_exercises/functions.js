function doActionWithSomeone(anyFunctionReference, name) {
    
    // something might happpen
    anyFunctionReference(name)
}

function doActionWithSomeoneReturn(anyFunctionReference, name) {
    return anyFunctionReference(name);
}

const fishing = (name) => `${name} is fishing`;


console.log();
