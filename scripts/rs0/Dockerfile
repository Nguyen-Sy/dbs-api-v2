FROM mongo

# Workdir configs directory
WORKDIR /usr/src/configs

# Copy config files
COPY mongo.conf .

EXPOSE 27018

CMD ["--config", "./mongo.conf"]