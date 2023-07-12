rsconf = {
  _id: 'rs0',
  members: [
    { _id: 0, host: '192.168.1.104:27018' },
    { _id: 1, host: '192.168.1.104:27019' },
    { _id: 2, host: '192.168.1.104:27020' },
  ],
};

rs.initiate(rsconf);
rs.conf();
rs.status();
