'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
 const { sanitizeEntity } = require('strapi-utils');

 module.exports = {
   async findbyCliente(ctx) {
     let entities;
     //get authenticated user details
     const _id = ctx.params._id;
     const user = ctx.state.user;
     console.log(ctx.params.documento)
     if(!user){
       return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found'}]}]);
     }
 
     entities = await strapi.query('prestamos').find({ client: _id, eliminado: false, finalizado: false });
     console.log(typeof(entities))

     return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.prestamos }));
   },

   async updatedatefile(ctx) {
    let entities;
    //get authenticated user details
    const _id = ctx.params._id;
    const date = ctx.params.date;
    const user = ctx.state.user;
    console.log(ctx.params.prestamo)
    if(!user){
      return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found'}]}]);
    }
    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.prestamos }));
  },
};
