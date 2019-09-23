# setup-php

<p align="left">
  <a href="https://github.com/nanasess/setup-php"><img alt="GitHub Actions status" src="https://github.com/nanasess/setup-php/workflows/Main%20workflow/badge.svg"></a>
</p>

This action sets up a PHP environment for use in actions by:

- optionally installing a version of PHP and adding to PATH.
- registering problem matchers for error output

## PHP version support

- 5.4
- 5.5
- 5.6
- 7.1
- 7.2
- 7.3

# Usage

See [action.yml](action.yml)

Basic:
```yaml
steps:
- uses: actions/checkout@master
- uses: nanasess/setup-php@master
  with:
    php-version: '7.3' # Middle version of a PHP version to use, using APT package version and phpenv version syntax.
- run: php my_script.php
```

Matrix Testing:
```yaml
jobs:
  build:
    runs-on: ubuntu-16.04
    strategy:
      matrix:
        php: [ '5.4', '5.5', '5.6', '7.1', '7.2', '7.3' ]
    name: PHP ${{ matrix.php }} sample
    steps:
      - uses: actions/checkout@master
      - name: Setup PHP
        uses: nanasess/setup-php@master
        with:
          php-version: ${{ matrix.php }}
      - run: php my_script.php
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

# Contributions

Contributions are welcome!  See [Contributor's Guide](docs/contributors.md)
