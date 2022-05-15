'use strict';

/**
 * commitment router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::commitment.commitment');
