init:
	npm install
	npm install -g @stoplight/prism-cli

mock:
	prism mock ./sample.yaml

gen.api:
	rm -rf ./src/apis
	npm run gen

run:
	npm run dev
