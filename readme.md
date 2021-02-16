<h1 align="center">
    Project Templates
</h1>

<h4 align="center">

</h4>

## Description

## Content

- [Description](#description)
- [Contents](#contents)
- [Usage](#usage)
- [Configuration](#configuration)
- [Development](#development)
- [Team](#team)
- [License](#license)

## Configuration

### Format

```json
{
  "kind": "template",
  "name": "typescript",
  "version": "1.0.0",
  "description": "",
  "visible": true,
  "extend": [""],
  "exclude": [""],
  "scripts": {
    "before_install": "",
    "after_install": ""
  },
  "renderer": {
    "exclude": [""],
    "values": [
      {
        "key": "repositoryName",
        "label": "repository name",
        "default": "tpoe-{{name}}",
        "required": false
      }
    ]
  },
  "note": "cd {{name}}\ncode ."
}
```

### Extend

Templates can extend other templates. Add the name of the templates you want to extend in the extend array in the `meta.json`. The extended templates are `copied` on by on in the `same direction` they are `added` in the `meta.json.

### Exclude

List of filenames to exclude from the template.

### Scripts

Scipts are executed before or after the installation of the template.

### Placeholders

Placeholders can be used in each file, filename and folder name of your template. During the initlialization the placeholders are replaced by the actual values. At the moment following placeholders are supported:

- {{name}}
- {{repository}}
- {{username}} // fetched from global git config
- {{email}} // fetched from global git config

### Transformation Methods

Transformation methods can be used to transform input variables. Just add the method before the actual value in the placeholder {{camelcase name}} or {{constantcase name}}

Available methods:

- camelcase: camelCase
- constantcase: CONSTANT_CASE
- kebabcase: kebab-case
- lowercase: lowercase
- pascalcase: PascalCase
- snakecase: snake_case
- uppercase: UPPERCASE

### Renderer

#### Exclude

List of filenames to exclude from rendering process.

#### Values

For all values in this array the user will be asked to provide additional informations.
This values can than be used like the default placeholders. With following syntax:

```
{{values.<key>}}
```

### Note

Note that is displayed after initializing a new workspace.

## Development

## Team

- Thomas Pöhlmann [(@perryrh0dan)](https://github.com/perryrh0dan)

## License

[MIT](https://github.com/perryrh0dan/tmpo/blob/master/license.md)
