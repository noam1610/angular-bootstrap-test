'use strict';

module.exports = function(app) {
    // inject:start
    require('./bis')(app);
    require('./home')(app);
    require('./tris')(app);
    // inject:end
};