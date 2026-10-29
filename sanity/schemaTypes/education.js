import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({ name: 'institution', type: 'string' }),
    defineField({ name: 'degree', type: 'string' }),
    defineField({ name: 'duration', type: 'string' }),
    defineField({ name: 'grade', type: 'string', description: 'e.g. GPA 3.38 / 4.00' }),
    defineField({ name: 'order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'degree', subtitle: 'institution' } },
});
