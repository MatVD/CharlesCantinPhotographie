export default {
  name: 'price-services',
  type: 'document',
  title: 'Tarifs et prestations',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Prix',
    },
  ],
}