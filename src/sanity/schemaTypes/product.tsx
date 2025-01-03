import { defineType } from 'sanity';

export const product = defineType({
  name: 'product', // Unique schema identifier
  title: 'Product', // Human-readable name
  type: 'document', // Define this as a document type
  fields: [
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot for better cropping experience
      },
      description: 'Upload an image of the product.',
    },
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'Enter the name of the product.',
      validation: (Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'productId',
      title: 'Product ID',
      type: 'string',
      description: 'Enter a unique ID for the product.',
      validation: (Rule) => Rule.required().regex(/^[a-zA-Z0-9_-]+$/, {
        name: 'alphanumeric',
        invert: false,
      }),
    },
    {
      name: 'description',
      title: 'Product Description',
      type: 'text',
      description: 'Provide a brief description of the product.',
      validation: (Rule) => Rule.required().min(10).max(1000),
    },
    {
      name: 'price',
      title: 'Product Price',
      type: 'number',
      description: 'Set the price of the product.',
      validation: (Rule) => Rule.required().positive(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: `$${subtitle}`,
        media,
      };
    },
  },
});