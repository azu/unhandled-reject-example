function waitFor(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function main(shouldFailed) {
    await waitFor(1000);
    throw new Error("ERRRRRRR!"); // failed after 1sec
}

// Random　Success or failure
main().then(() => {
    console.log("ok");
    // It is optional - if comment out is, node.js get same result
    process.exit(0); 
}).catch(error => {
    console.error(error);
    process.exit(1);
});