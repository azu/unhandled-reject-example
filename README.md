# unhandled-rejections-example

Example wrong usage of Unhandled Rejections. Make exit status 1.

## Problem Code

Unhandled Rejection make status code `0` 

Run:

```
npm run start
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
    throw new Error("ERRRRRRR!"); // failed after 1sec
}

main();
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
```

Should `catch` and call `process.exit` with expected status code

## Another solusions: `--unhandled-rejections=strict`

Node.js 12+ implement `--unhandled-rejections=mode` flag.

`--unhandled-rejections=strict` Raise the unhandled rejection as an uncaught exception.

```
node --unhandled-rejections=strict main.js
echo $? # 1
```

## Related

- https://github.com/mcollina/make-promises-safe
- https://github.com/sindresorhus/loud-rejection
- https://github.com/sindresorhus/hard-rejection

## Changelog

See [Releases page](https://github.com/azu/unhandled-rejections-example/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/unhandled-rejections-example/issues).

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
