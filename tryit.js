// tryit
// Simple, re-usuable try-catch, this is a performance optimization
// and provides a cleaner API.
module.exports = function (fn, cb) {
    try {
        fn();
        if (cb) cb(null);
    } catch (e) {
        if (cb) cb(e);
    }
};
