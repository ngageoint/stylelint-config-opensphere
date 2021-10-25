# stylelint-config-opensphere

## About

This config extends [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) to meet the SCSS style guidelines used by [OpenSphere](https://github.com/ngageoint/opensphere).

## Usage

To use this configuration, add this project and [stylelint](https://github.com/stylelint/stylelint) as dev dependencies.

```
yarn add -D stylelint stylelint-config-opensphere
```

Then add a script to your project's `package.json` to lint your SCSS. It may also be useful to add a script to auto-fix issues.

```
"lint:css": "stylelint 'scss/**/*.scss'",
"lint:css-fix": "stylelint --fix 'scss/**/*.scss'"
```

## Pull Requests

If you'd like to contribute to this project, please make a pull request. We'll review the pull request and discuss the changes. All pull request contributions to this project will be released under the Apache license.

Software source code previously released under an open source license and then modified by NGA staff is considered a "joint work" (see 17 USC § 101); it is partially copyrighted, partially public domain, and as a whole is protected by the copyrights of the non-government authors and must be released according to the terms of the original open source license.

## License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
