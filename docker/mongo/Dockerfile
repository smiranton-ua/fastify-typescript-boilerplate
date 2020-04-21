FROM mongo:latest

ENV DB_PATH /data/rundb
ENV DB_DUMP_PATH /dump/SportsData

COPY dump ./dump/

RUN mkdir -p ${DB_PATH}; \
    mongod --dbpath ${DB_PATH} --fork --logpath /dev/null; \
    mongorestore --gzip -d SportsData ${DB_DUMP_PATH}; \
    mongod --dbpath ${DB_PATH} --shutdown;

RUN chown -R mongodb:mongodb ${DB_PATH}

CMD ["mongod", "--dbpath", "/data/rundb", "--logpath", "/dev/null"]
