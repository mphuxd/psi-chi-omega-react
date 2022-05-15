'use strict';

/**
 *  covid-19 controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::covid-19.covid-19');
