import os from 'os';

exports.getUsage = (req, res) => {
    const cpus = os.cpus().length;
    const loadAverage = os.loadavg()[0] / cpus;

    console.log(cpus);
    console.log(loadAverage);

    // console.log(os.cpus());
    // console.log(os.totalmem());
    // console.log(os.freemem());

    res.send({
      timestamp: Math.floor(Date.now() / 1000),
      loadAverage: loadAverage
    });
};
