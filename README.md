# unhandled-reject-example

Example of Unhandled Rejection.

## Problem Code

Unhandled Rejection make status code `0` 

Run:

```
npm start
echo $? # 0
```

Code:

```js
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
```

## Fix Code

Run:

```
npm run fixed-start
echo $? # 0 or 1
```

Code:

```js
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
main(Math.random() < 0.6).then(() => {
    console.log("ok");
    // It is optional - if comment out is, node.js get same result
    process.exit(0); 
}).catch(error => {
    console.error(error);
    process.exit(1);
});
```

Should `catch` and call `process.exit` with expected status code

## Related

- https://github.com/sindresorhus/loud-rejection
- https://github.com/sindresorhus/hard-rejection

## Changelog

See [Releases page](https://github.com/azu/unhandled-reject-example/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/unhandled-reject-example/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
