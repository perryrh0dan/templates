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

``` json
{
    "name": "",
    "extend": [""],
    "exclude": [""],
}
```

### Extend

Templates can extend other templates. Add the name of the templates you want to extend in the extend array in the `meta.json`. The extended templates are `copied` on by on in the `same direction` they are `added` in the `meta.json.

### Exclude

List of filenames to exclude from the template.

### Placeholders

Placeholders can be used in each file of your template. During the initlialization the placeholders are replaced by the actual values. At the moment following placeholders are supported:
- {{name}}
- {{repository}} 
- {{username}} // fetched from global git config
- {{email}} // fetched from global git config

## Development

## Licence

## Team