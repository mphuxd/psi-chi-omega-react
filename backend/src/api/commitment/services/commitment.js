'use strict';

/**
 * commitment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::commitment.commitment');
