  
  
  
  
  
#  LSD Project Frontend | SSR & REST API
  
  
_Large System Development, fall 2020_
  
**Stephan Duelund Djurhuus**
  
![cover image](/assets/cover.png?0.1539541974612908 )  
  
##  Content
  
  
- [Setup](/#setup )
  - [Dependency Installation](/#dependency-installation )
  - [Environment Configuration](/#environment-configuration )
- [Source Structure](/#source-structure )
- [Usage](/#usage )
  - [Testing](/#testing )
  - [Development](/#development )
  - [Production](/#production )
  
##  Setup
  
  
###  Dependency Installation
  
  
```bash
# bash
yarn install
```
  
> If the contract isn't installed add it with yarn.
  
```bash
# bash
yarn add Fraqs/LSD-Project.Contract
```
  
[Contract Documentation](https://github.com/Fraqs/LSD-Project.Contract )
  
###  Environment Configuration
  
  
Create a `.evn` file in the root of the project containing the content below.
  
```bash
NODE_ENV=development
RPC_HOST=http://localhost:3000
```
  
##  Source Structure
  
  
```bash
src ┐
    ├ contract/     # the rpc contract and contract mock.
    ├ routes/       # the views route and api route.
    ├ views/        # ejs views.
    ├ static/       # static files for ejs - scripts, styles and images.
    ├ test/         # test files.
    └ index.ts      # main file.
...                 # configuration files
```
  
##  Usage
  
  
###  Testing
  
  
The test is handled by the test framework Jest.
  
```bash
# bash
yarn test
```
  
###  Development
  
  
The development environment uses a mock/ fake Contract. This is used when the backend isn't connected to the frontend.
  
```bash
# bash
yarn dev
```
  
> Development environment can be set in the `.evn`
  
###  Production
  
  
The production environment uses the RPC Contract. This is used when the backend is connected to the frontend.
  
```bash
# bash
yarn start
```
  
## 
  
  
Software Development @ Copenhagen Business Academy, Denmark 2020
  