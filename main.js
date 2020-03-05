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
main(Math.random() < 0.5);