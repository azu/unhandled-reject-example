function waitFor(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function main(shouldFailed) {
    await waitFor(1000);
    if (!shouldFailed) {
        return; // sucess after 2sec        
    }
    throw new Error("ERRRRRRR!"); // failed after 2sec
}

// Random　Success or failure
main(Math.random() < 0.5).then(() => {
    console.log("ok");
    // It is optional - if comment out is, node.js get same result
    process.exit(0); 
}).catch(error => {
    console.error(error);
    process.exit(1);
});