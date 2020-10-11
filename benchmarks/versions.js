exports.versions = {
  'fastest-json-copy (v1)': require('../lib/v1').copy,
  'fast-copy': require('fast-copy'),
  'JSON.parse(JSON.stringify)': function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  'lodash.cloneDeep': require('lodash').cloneDeep,
  'fast-clone': require('fast-clone'),
  'deepclone': require('deepclone'),
  'fast-deepclone': require('fast-deepclone'),
};
