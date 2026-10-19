import { defineArrayMember, defineType } from 'sanity';

export default defineType({
  name: 'blockContent',
  title: 'Rich text',
  type: 'array',
  of: [
    defineArrayMember({ type: 'block' }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    }),
    defineArrayMember({
      type: 'object',
      name: 'code',
      title: 'Code block',
      fields: [
        { name: 'language', type: 'string' },
        { name: 'code', type: 'text' },
      ],
      preview: { select: { title: 'language' } },
    }),
  ],
});
