# Rails Micro Front-end Demo

## Install and start

1. Install docker
2. Run `docker-compose up`
3. Go to: http://localhost:3000/home/index

## Features

### Mutliple front-end injection

With the help of a rails helper using assets manifest.json.

To load a microfront:

```rails
<%= load_manifest_resources("http://assetsserver:8080/vue-app/dist/manifest.json") %>
<div id="app"></div>
```

### Variables injection

#### config

To pass data from the rails controller/database to each front-end.

#### features

Data from the 'features' database table.

Used to activate/disactivate features in the front-end without touching anything in rails (kind of feature flags).
