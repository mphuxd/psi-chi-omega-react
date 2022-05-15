'use strict';

/**
 * executive-board service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::executive-board.executive-board');
