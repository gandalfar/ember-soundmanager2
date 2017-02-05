/* eslint-env node */
'use strict';

const path = require('path');
const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-soundmanager2',

  included: function(target) {
    this._super.included.apply(this, arguments);

    const app = target.app || target;
    const sm2Path = 'vendor/soundmanager2';

    app.import(path.join(sm2Path, 'soundmanager2-nodebug.js'));
  },

  treeForVendor: function(vendorTree) {
    let trees = [];
    let sm2Path = path.join(path.dirname(require.resolve('soundmanager2'), 'script'));

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(new Funnel(sm2Path, {
      destDir: 'soundmanager2'
    }));

    return mergeTrees(trees);
  }

};
