'use strict';

/**
 * join-brother service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::join-brother.join-brother');
