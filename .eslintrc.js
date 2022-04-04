// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
    ],
    "rules": {
        "react/display-name": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-closing-tag-location": 1,
        "react/jsx-tag-spacing": 1,
        "react/jsx-curly-spacing": 1,
        "react/jsx-boolean-value": 1,
        "react/jsx-wrap-multilines": 1,
        "react/self-closing-comp": 1,
        "no-multi-spaces": 1,
        "react/button-has-type": 1,
        "no-unused-vars": "off",
    }
};
