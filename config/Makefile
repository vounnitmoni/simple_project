SHELL=/bin/bash
include .env

webPath=../web
apiPath=../api

define echo_title
	@echo -e "**** ${1} ****"
endef

.PHONY: setup

setup:
	$(MAKE) add-hosts
	$(MAKE) web-setup

	$(call echo_title, "Up docker with docker compose")
	docker-compose up -d

add-hosts:
	$(call echo_title, "Add host to /etc/hosts")
	@if [ `grep -o "${HOST_NAME}" /etc/hosts | wc -l` = 0 ]; then\
		sudo bash -c "echo 0.0.0.0 ${HOST_NAME} >> /etc/hosts";\
	else\
		echo "---> Skip: host already existed.";\
	fi

web-setup:
	$(call echo_title, "Create .env")
	@if [ -f "${webPath}/.env" ]; then\
		echo "* .env is already existed";\
	else\
		cp ${webPath}/.env.example ${webPath}/.env;\
		echo "* .env is copied from .env.example";\
	fi

	$(call echo_title, "Install packages and dependencies")
	docker-compose run --no-deps web yarn --frozen-lockfile