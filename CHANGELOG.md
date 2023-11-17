# [2.7.0](https://github.com/arkemishub/clientjs/compare/v2.6.2...v2.7.0) (2023-11-17)


### Features

* extend relational operator isnull and not ([#34](https://github.com/arkemishub/clientjs/issues/34)) ([62485f5](https://github.com/arkemishub/clientjs/commit/62485f5c3b23d00a5bdf68b19fa73d4002ed9440))

## [2.6.2](https://github.com/arkemishub/clientjs/compare/v2.6.1...v2.6.2) (2023-10-24)


### Bug Fixes

* extend types for data requests ([#32](https://github.com/arkemishub/clientjs/issues/32)) ([4a9aa16](https://github.com/arkemishub/clientjs/commit/4a9aa16f338b8b7d923d153e8ead9326bb4ab4d3))

## [2.6.1](https://github.com/arkemishub/clientjs/compare/v2.6.0...v2.6.1) (2023-10-11)


### Bug Fixes

* add config params on signIn method ([#31](https://github.com/arkemishub/clientjs/issues/31)) ([074d180](https://github.com/arkemishub/clientjs/commit/074d180c36a2066da896350610cd81138b94c6ee))

# [2.6.0](https://github.com/arkemishub/clientjs/compare/v2.5.0...v2.6.0) (2023-09-27)


### Features

* topology improvements and update docs ([#30](https://github.com/arkemishub/clientjs/issues/30)) ([3584414](https://github.com/arkemishub/clientjs/commit/3584414d68d17e8436a90c3091bef34fa0376064))

# [2.5.0](https://github.com/arkemishub/clientjs/compare/v2.4.1...v2.5.0) (2023-07-26)


### Features

* add recover and reset password methods ([#23](https://github.com/arkemishub/clientjs/issues/23)) ([f5a13be](https://github.com/arkemishub/clientjs/commit/f5a13bef39fdf7a15927d4ae4881030744cee707))

## [2.4.1](https://github.com/arkemishub/clientjs/compare/v2.4.0...v2.4.1) (2023-06-30)


### Bug Fixes

* adjust verify and refresh endpoints ([#19](https://github.com/arkemishub/clientjs/issues/19)) ([6da9701](https://github.com/arkemishub/clientjs/commit/6da97015ccb0dc2fdb905dcbf7407c8eac82859e))

# [2.4.0](https://github.com/arkemishub/clientjs/compare/v2.3.0...v2.4.0) (2023-06-27)


### Features

* add httpClientConfig to define external overrides ([#11](https://github.com/arkemishub/clientjs/issues/11)) ([7d97608](https://github.com/arkemishub/clientjs/commit/7d9760848eb8784d37a6769315ce3daab6c39dfc))

# [2.3.0](https://github.com/arkemishub/clientjs/compare/v2.2.0...v2.3.0) (2023-06-26)


### Features

* add changePassword method ([#9](https://github.com/arkemishub/clientjs/issues/9)) ([356012d](https://github.com/arkemishub/clientjs/commit/356012d30b4d63c87e6f77251308927e3d0ec3f2))

# [2.2.0](https://github.com/arkemishub/clientjs/compare/v2.1.3...v2.2.0) (2023-06-21)


### Features

* add prefix path to client + refactoring ([#6](https://github.com/arkemishub/clientjs/issues/6)) ([75d2070](https://github.com/arkemishub/clientjs/commit/75d2070cb89d69572ec62a2a5fda8eedebebf9a6))

## [2.1.3](https://github.com/arkemishub/clientjs/compare/v2.1.2...v2.1.3) (2023-06-15)


### Bug Fixes

* adjust types for TBaseParameter values ([#3](https://github.com/arkemishub/clientjs/issues/3)) ([9fb1e60](https://github.com/arkemishub/clientjs/commit/9fb1e6052d275376e7ee162ecb61d272642c5590))

## [2.1.2](https://github.com/arkemishub/clientjs/compare/v2.1.1...v2.1.2) (2023-06-13)


### Bug Fixes

* overrides for project on arke-project-key header ([#2](https://github.com/arkemishub/clientjs/issues/2)) ([2059018](https://github.com/arkemishub/clientjs/commit/20590189e90af3dfe4ec49eafba9821a371b7cb4))

## [2.1.1](https://github.com/arkemishub/clientjs/compare/v2.1.0...v2.1.1) (2023-06-09)


### Bug Fixes

* label on TBaseParameter is now required ([#1](https://github.com/arkemishub/clientjs/issues/1)) ([0e01b69](https://github.com/arkemishub/clientjs/commit/0e01b6920e7c5c4056184f07e624d168e7d41a2a))

# [2.1.0](https://github.com/arkemishub/clientjs/compare/v2.0.0...v2.1.0) (2023-04-19)


### Features

* expose project key ([#5](https://github.com/arkemishub/clientjs/issues/5)) ([d50df2f](https://github.com/arkemishub/clientjs/commit/d50df2ff2f1ad62fba7cf854d1600bf7dc108763))

# [2.0.0](https://github.com/arkemishub/clientjs/compare/v1.2.1...v2.0.0) (2023-04-05)


### Features

* drop support for internal session management ([#3](https://github.com/arkemishub/clientjs/issues/3)) ([a9cb13e](https://github.com/arkemishub/clientjs/commit/a9cb13ea3ce691d14655333f104fb2755a357862))


### BREAKING CHANGES

* drop support for arke-auth cookie
session should now be hadled from outside by using getSession and setSession functions, arke-auth cookie is no more supported

## [1.2.1](https://github.com/arkemishub/clientjs/compare/v1.2.0...v1.2.1) (2023-03-30)


### Bug Fixes

* set axios external on esbuild ([518c7bd](https://github.com/arkemishub/clientjs/commit/518c7bd0efb29b7b0fd98bf146bfaffaf0dad1eb))

# [1.2.0](https://github.com/arkemishub/clientjs/compare/v1.1.4...v1.2.0) (2023-03-30)


### Features

* getSession & setSession methods ([#1](https://github.com/arkemishub/clientjs/issues/1)) ([9c4abbf](https://github.com/arkemishub/clientjs/commit/9c4abbfeb898561db1c3a7eff9e8e8716ae615fe))


### Reverts

* baseUrl ([b146831](https://github.com/arkemishub/clientjs/commit/b1468316ec247a124935cd804f6000473a014d96))

# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.4](https://github.com/arkemishub/arke-monorepo/compare/@arkejs/client@1.1.3...@arkejs/client@1.1.4) (2023-01-27)

**Note:** Version bump only for package @arkejs/client

## [1.1.3](https://github.com/arkemishub/arke-monorepo/compare/@arkejs/client@1.1.2...@arkejs/client@1.1.3) (2023-01-26)

**Note:** Version bump only for package @arkejs/client

## [1.1.2](https://github.com/arkemishub/arke-monorepo/compare/@arkejs/client@1.1.1...@arkejs/client@1.1.2) (2022-11-16)

### Bug Fixes

- mui peerDependencies ([80f7147](https://github.com/arkemishub/arke-monorepo/commit/80f7147b01a4f7df191e1f02ba5dcafa2246b784))

## 1.1.1 (2022-11-15)

**Note:** Version bump only for package @arkejs/client
