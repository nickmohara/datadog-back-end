import notebook from '../controllers/notebookController';

export default (app) => {
    app.route('/notes')
        .get(notebook.test)
        // .post(notebook.createNote);

    app.get("/url", (req, res, next) => {
     res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    });
};
