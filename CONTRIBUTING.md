# Introduction:

Welcome to Hotel UI. Firt of all, thank you for taking the time to contribute and be part of this project.

## Folder structer for components

- Each component should have its own folder named with `UpperCamelCase` naming convention.
- the folder should contain:
  - `index.jsx`: here you write the component itself
  - `ComponentName.styles.js`: here you write all the styles for this component
  - `ComponentName.stories.js`: here you write the component stories
  - `ComponentName.test.js`: here you write tests for the component
- inside `components/index.js` export that component as the following:
  `export { default as ComponentName} from "./ComponentName" `

> You can refer to the example `Input` component

## Getting started

```
yarn install
```

## Developing

To start the developing run :

```
 yarn start
```

This will build a version of your library, run the watcher and also run Storybook.
To open Storybook manually open your Browser and navigate to [http://localhost:6006](http://localhost:6006).
Start developing your components in src/components folder and update the src/index.js file accordingly.
Always provide an YourComponent.story.tsx file, so your component will show up in Storybook.

## Linking the package locally to the main project.

- This project is a package that reperesent our components library (@redapy/hotels-components-casbah), and it will be used in our main next-starter.

### Yarn link:

- First of all run `yarn rollup` to build the package
- To test this **package** with our **main-project** we need to create a symlink using `yarn link`, and it's done with two steps:
  - In your local root folder for the `package` run `yarn link`.
  - In the **main** project (which will use this library/package) run `yarn link "@redapy/hotels-components-casbah"`
- MAKE SURE THAT THE MAIN PROJECT THAT WILL USE THIS LIBRARY SHOULD HAVE THE FOLLOWING WEBPACK CONFIG:

```
import { withContentlayer } from 'next-contentlayer'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default withContentlayer({
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
  webpack: (config)  => {

    config.resolve.alias = {
      ...config.resolve.alias,
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          next: path.resolve(__dirname, './node_modules/next')
    }
    return config
  }
})
```

- This is mainly to avoid having two copies of react, hence won't be able to use hooks. read more on the [React docs](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react)

### undo and back to normal:

- To back to normal we need to do the same steps as before but in reverse orders:
  - First in the **main** project run `yarn unlink "@redapy/hotels-components-casbah"`.
  - Then in your **package** folder run `yarn unlink`
- Finally you can run `yarn add @redapy/hotels-components-casbah` to install the published package.

### Note:

- We have to run `yarn rollup` after every change to reflect the changes in our **main** project

## Tests

To run test :

```
 yarn test
```
