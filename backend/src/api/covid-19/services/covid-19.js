'use strict';

/**
 * covid-19 service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::covid-19.covid-19');
