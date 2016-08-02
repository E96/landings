FROM nginx
MAINTAINER Andrey Kolobov <andruha@e96.ru>

ADD data /data
ADD vshkolu.e96.conf /etc/nginx/conf.d/vshkolu.e96.conf
