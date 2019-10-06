import mongoose from 'mongoose';

exports.test = (req, res) => {
    res.json(["hellllooo"]);
    // note.findById(req.params.noteId, (err, note) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //
    //     res.json(note);
    // });
};

exports.createNote = (req, res) => {
    const newNote = new note(req.body);

    newNote.save((err, note) => {
        if (err) {
            res.send(err);
        }

        res.json(note);
    });
};
