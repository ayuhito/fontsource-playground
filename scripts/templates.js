const _ = require(`lodash`)

exports.packageJson = _.template(
  `
{
  "name": "fontsource-<%= fontId %>",
  "version": "1.0.0",
  "description": "<%= fontName %> font in NPM glory.",
  "main": "index.css",
  "keywords": [
    "fontsource",
    "font",
    "font family",
    "google fonts",
    "<%= fontId %>"
  ],
  "author": "Lotus <declininglotus@gmail.com>",
  "license": "MIT",
  "repository": "https://github.com/DecliningLotus/fontsource/tree/master/packages/<%= fontId %>"
}
`
)

exports.fontFace = _.template(
  `/* <%= fontId %>-<%= subset %>-<%= weight %>-<%= style %> */
@font-face {
  font-family: '<%= fontName %>';
  font-style: <%= style %>;
  font-display: swap;
  font-weight: <%= weight %>;
  src:<% _.each(locals, function(localName) { %>
    local('<%= localName %>'),<% });
    %> 
    url('<%= woff2Path %>') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    url('<%= woffPath %>') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
`
)

exports.readme = _.template(
  `
# <%= fontName %>
The CSS and web font files to easily self-host “<%= fontName %>”.
## Install
\`npm install --save @openfonts/<%= fontId %>\`
## Use
Typefaces assume you’re using webpack to process CSS and files. Each fontsource
package includes all necessary font files (woff2, woff) and a CSS file with
font-face declarations pointing at these files.
You will need to have webpack setup to load css and font files. Many tools built
with Webpack will work out of the box with Typefaces such as [Gatsby](https://github.com/gatsbyjs/gatsby)
and [Create React App](https://github.com/facebookincubator/create-react-app).
To use, simply require the package in your project’s entry file e.g.
\`\`\`javascript
// Load <%= fontName %> typeface
require('@openfonts/<%= fontId %>')
\`\`\`
Usage in SCSS:
\`\`\`scss
@import "~@openfonts/<%= fontId %>/index.css";
\`\`\`
`
)
