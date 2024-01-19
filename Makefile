PHONY: .docker_build .docker_lint .run

# Build the docker image
docker_build:
	docker buildx build -t nb6vac-wake-up .

# Lint the docker image
docker_lint:
	docker run --rm -i -v $(shell pwd)/.hadolint.yaml:/root/.config/hadolint.yaml hadolint/hadolint:v2.12.0-alpine < Dockerfile

# Run the docker image
run:
	docker run --rm -it --env NB6VAC_USER=$$NB6VAC_USER --env NB6VAC_PASSWORD=$$NB6VAC_PASSWORD nb6vac-wake-up npm run wake-up
