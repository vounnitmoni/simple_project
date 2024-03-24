SHELL=/bin/bash

composeFile=../config/compose.yml

logs:
	docker-compose -f ${composeFile} logs -f web

yarn-install: 
	docker-compose -f ${composeFile} run --no-deps web yarn install 