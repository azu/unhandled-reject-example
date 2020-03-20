process.on('unhandledRejection', (reason, promise) => {
  console.error(reason);
  process.exit(1);
});

function waitFor(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function main(shouldFailed) {
  await waitFor(1000);
  throw new Error("ERRRRRRR!"); // failed after 1sec
}

main();