# react-animation
My React Animation Studies

## Studies

### 1. Simple add/remove animation on list.

This is my first approach to react, with react animation.

I dont looked up for best practices, doing it my way.

### 2. Same as 1, but with some best pratices.

After read about [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.n0f77bjy9), i decided to re-write study 1,

following some best practices.

## How to see the studies in action
```bash
$ git clone git@ithub.com:guiceolin/react-animation.git
$ cd react-animation
$ yarn install && webpack && bin/server
```

Then select study on [http://localhost:9090](http://localhost:9090)

**NOTE:** `bin/server` requires ruby installed on machine.

If you want to use another server, just point it to `public` folder.

## For developers
To generate JS's maps, just pass `-d` flag to `webpack` command.
```bash
# fisrt tab/window
$ bin/server
# another tab/window
$ webpack -d --watch
```
