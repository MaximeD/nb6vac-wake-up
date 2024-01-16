# NB6VAC Wake up!

I have a loss of internet speed every 6h. Restarting the box _or_ just toggling eco mode fixes the problem.

## Usage

```shell
NB6VAC_USER=… NB6VAC_PASSWORD=… npm run wake-up
```

### docker

```shell
# build image
docker buildx build -t nb6vac-wake-up .

# run it
docker run --env NB6VAC_USER=$NB6VAC_USER --env NB6VAC_PASSWORD=$NB6VAC_PASSWORD --rm nb6vac-wake-up
```

