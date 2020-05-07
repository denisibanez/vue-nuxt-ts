module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    "airbnb-base"
  ],
  // add your custom rules here
  rules: {
    "no-console": "off"
  }
}
