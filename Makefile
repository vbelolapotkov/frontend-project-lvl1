install:
	npm install

# Using dry-run to avoid real publishing of this demo package
publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games

brain-even:
	node bin/brain-even

brain-calc:
	node bin/brain-calc

lint:
	npx eslint .