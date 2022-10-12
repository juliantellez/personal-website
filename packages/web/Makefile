install:
	npm ci

test:
	npm run test

lint:
	npm run lint

build:
	npm run build

# Run development inside a container but reflected on the working tree as a volume
docker-run:
	docker run -p 3000:3000 -v $(shell pwd):/personal-website -it node:16 /bin/sh
