## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Update deployed version in git

- build the app:

  ```bash
  npm run build
  ```

- Login to repo:

  ```bash
  aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 223455578796.dkr.ecr.eu-central-1.amazonaws.com
  ```

- bash (adds the dist -force):

  ```bash
  git add dist -f
  ```

- commit

  ```bash
  git commit -b "update dist"
  ```

- push to gh-pages

  ```bash
  git subtree push --prefix dist origin gh-pages
  ```
