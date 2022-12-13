export default {
  name: 'galerie',
  type: 'document',
  title: 'Galerie',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Photo',
      option: {
        hotspot: true
      }
    },
  ],
}
