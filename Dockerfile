FROM nginx
MAINTAINER Andrey Kolobov <andruha@e96.ru>

ADD data /data
ADD web.conf /etc/nginx/conf.d/web.conf