FROM mongo

# Create app directory
WORKDIR /usr/src/configs

# Install app dependencies
COPY repSet.js .
COPY setup.sh .

ENTRYPOINT [ "/bin/bash" ]
CMD ["./setup.sh"]