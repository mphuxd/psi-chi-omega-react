'use strict';

/**
 * little-sis service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::little-sis.little-sis');
