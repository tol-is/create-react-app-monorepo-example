# Monorepo Example with create-react-app and yarn workspaces

This is just a quick monorepo test with yarn workspaces and create react app.

Workspaces are a new way to setup your package architecture that’s available by default starting from Yarn 1.0. It allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of them in a single pass.

Workspaces are stable enough to be used in large-scale applications and shouldn’t change anything to the way the regular installs work

##### 1. install create react app and yarn
- `npm install -g create-react-app`
- `npm install -g yarn`

##### 2. bootstrap your c-r-a app
- `create-react-app project_name`

##### 3. take over build configuration
- `yarn eject`

##### 4. Enable yarn workspaces
- Create a .yarnrc file with the line `workspaces-experimental true`

##### 5. Configure workspace in package.json
You just need to add the following line in your root package.json.
`"workspaces": [
    "packages/*"
]`

##### 6. Create packages directory
- Create your `/packages` in the root directory or anywhere you want them to be.

##### 7. Make a directory for the entry app
- In your packages directory, create an directory of your choise **app**, **main**, **entry** are common choices.
- `cd packages/app`
- `npm init` to create a package.json
- `yarn add react` and `yarn add react-dom` to install dependencies of the main app

##### 8. Configure Webpack
-Next you need to edit the webpack configuration to look into the right locations.
-All path configurations are found in the `config/paths.js` file.
-You will only need to edit the **appIndexJs** and **appSrc** variables.


    module.exports = {
      ...
      appIndexJs: resolveApp('packages/app/index.js'),
      ...
      appSrc: resolveApp('packages'),
      ...
    };

##### 9. Install
Finally, run `yarn install` somewhere, ideally inside the workspace root. All your project dependencies will be installed together, giving Yarn more latitude to better optimize them.

If everything works well, you should now have a similar file hierarchy:

    - config
    - node_modules
    - packages
      - app
        - App.css
        - App.js
        - App.test.js
        - index.css
        - index.js
        - logo.svg
        - package.json
        - registerServiceWorker.js
      - package-alpha
        - index.js
        - package.json
      - package-beta
        - index.js
        - package.json
    - public
    - scripts
    - .gitignore
    - package.json

##### 10. Run your code
- `yarn start` Comes from create-react-app and will start a webpackDevServer at http://localhost:3000/ with hot reloading and the whole shebang

##### 11. Build
- `yarn build` Creates a production build in the `/build` directory
