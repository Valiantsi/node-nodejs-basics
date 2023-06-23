const parseArgs = () => {
    const args = process.argv.slice(2);
    const value= args[0];
    const value2 = args[1];
    console.log(`propName is ${value}, prop2Name is ${value2}`)
};

parseArgs();