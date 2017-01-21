# react-animation
My React Animation Studies

## Studies

1. Simple add/remove animation on list.

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
