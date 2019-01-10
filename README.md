# Simple React
Simple React boilerplate with Webpack and styled-components.

# Installing
Clone the repository:
```sh
git clone https://github.com/narulakeshav/simple-react.git
```

Then, install dependencies and run `dev` command.
```sh
cd simple-react
yarn
yarn dev
```

# /src Folder
The `src` folder contains all of your React code. This folder is divided into multiple subfolders and files:

* `components`: Contains a list of (atomic) components you can add to re-use them throughout the entire project. Currently, it only contains a `Button` component.
* `utils`: Contains utility and helper functions, mainly for `styles`. You can import custom styles such as `Grid`, `Section` or variables such as `SCHEME`, `COLORS`, and `FONT`.
* `views`: Contains the list of views or pages for your app.
* `app.jsx`: Contains all the routing logic (uses `React.lazy()`)
* `index.jsx`: The entry file for the project.
* `reset.css.js`: A styled-components file to reset (normalize) CSS properties.

# Contribution
This boilerplate is an open-sourced project. Any contribution is welcomed. I will add you to the **Acknowledgements** section below.

# Acknowledgements
Thank you to these authors for contribution.
* @narulakeshav
