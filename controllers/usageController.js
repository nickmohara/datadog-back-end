import os from 'os';

exports.getUsage = (req, res) => {
    const cpus = os.cpus().length;
    const loadAverage = (os.loadavg()[0] / cpus);
    res.send({
      timestamp: Date.now(),
      loadAverage: loadAverage
    });
};
