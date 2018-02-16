FROM devopsftw/baseimage
MAINTAINER Andrey Kolobov <axelpal@e96.ru>


RUN apt update && apt install -y nginx-full

ADD consul.json /etc/consul/consul.json
ADD vshkolu/vshkolu.e96.conf /etc/nginx/conf.d/vshkolu.e96.conf
ADD vodonagrevateli/vodonagrevateli.e96.conf /etc/nginx/conf.d/vodonagrevateli.e96.conf
ADD velo/web.conf /etc/nginx/conf.d/velo.e96.conf
ADD openbank/otkrytie.e96.conf /etc/nginx/conf.d/otkrytie.e96.conf
ADD iphone/iphone.e96.conf /etc/nginx/conf.d/iphone.e96.conf
ADD gift/gift.e96.conf /etc/nginx/conf.d/gift.e96.conf
ADD franchise/franchise.e96.conf /etc/nginx/conf.d/franchise.e96.conf
ADD cybermonday/cybermonday.e96.conf /etc/nginx/conf.d/cybermonday.e96.conf
ADD bosch-drill/landing.conf /etc/nginx/conf.d/bosch-drill.e96.conf
ADD boiler/kotli.e96.conf /etc/nginx/conf.d/kotli.e96.conf
COPY service-nginx.sh /etc/service/nginx/run
ADD . /landings

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]
CMD [ ]
