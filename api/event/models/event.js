'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

function slugify(data) {
  var date = new Date(data.start);
  var month = date.getMonth() + 1;
  var monthPadded = month > 10 ? month : "0" + month;
  return data.name.toLowerCase().replace(' ', '/') + "-" + monthPadded;
}

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.name) {
        data.slug = slugify(data)
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.name) {
        data.slug = slugify(data)
      }
    },
  },
};
