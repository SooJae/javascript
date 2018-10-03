module.exports = {
    "env": {
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
      "no-console":"off",
      "no-undef":"off",
        "indent": [
            2,
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],

        "semi": [
            "error",
            "always"
        ]
    }
};
