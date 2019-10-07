import usageController from '../controllers/usageController';

export default (app) => {
    app.route('/getUsage')
        .get(usageController.getUsage)
};
