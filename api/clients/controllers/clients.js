'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
 const { sanitizeEntity } = require('strapi-utils');

 module.exports = {
   async findOnecc(ctx) {
     let entities;
     //get authenticated user details
     const documento = parseInt(ctx.params.documento);
     const user = ctx.state.user;
     console.log(ctx.params.documento)
     if(!user){
       return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found'}]}]);
     }
 
     entities = await strapi.query('clients').find({ documento: documento });
     console.log(typeof(entities))

     return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.clients }));
   },
};
