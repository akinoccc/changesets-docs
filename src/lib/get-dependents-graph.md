# Get Dependents Graph

[![npm package](https://img.shields.io/npm/v/@changesets/get-dependents-graph)](https://npmjs.com/package/@changesets/get-dependents-graph)

[//]: # ([![View changelog]&#40;https://img.shields.io/badge/Explore%20Changelog-brightgreen&#41;]&#40;./CHANGELOG.md&#41;)

Small helper utility extracted from bolt to get a graph of relationships between packages.

```ts
import { getDependentsGraph } from "@changesets/get-dependents-graph";
import { getPackages } from "@manypkg/get-packages";

let { graph, valid } = getDependentsGraph(await getPackages(cwd));
```

Mostly published for use in [changesets](https://www.npmjs.com/package/@changesets/cli)