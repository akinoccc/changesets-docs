# @changesets/read

[![npm package](https://img.shields.io/npm/v/@changesets/read)](https://npmjs.com/package/@changesets/read)

[//]: # ([![View changelog]&#40;https://img.shields.io/badge/Explore%20Changelog-brightgreen&#41;]&#40;./CHANGELOG.md&#41;)

Read in all changesets from a repository.

```js
import read from "@changesets/read";

let changesets = await getChangesets(cwd);
```

This returns an array of formatted changesets.
