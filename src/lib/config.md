# @changesets/config

> Utilities for reading and parsing Changeset's config

[![npm package](https://img.shields.io/npm/v/@changesets/config)](https://npmjs.com/package/@changesets/config)

[//]: # ([![View changelog]&#40;https://img.shields.io/badge/Explore%20Changelog-brightgreen&#41;]&#40;./CHANGELOG.md&#41;)

```tsx
import { parse, read, ValidationError } from "@changesets/config";

let config = await read(process.cwd(), workspaces);

let config = parse({ commit: true }, workspaces);

try {
  return parse({ commit: true }, workspaces);
} catch (err) {
  if (err instanceof ValidationError) {
    let message = err.message;
  } else {
    throw err;
  }
}
```
