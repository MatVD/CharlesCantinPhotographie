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
      title: 'Photo',
      type: 'array',
      of: [{
        type: "image",
      }],
      option: {
        hotspot: true
      }
    },
  ],
}
