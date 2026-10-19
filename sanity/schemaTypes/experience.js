import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Job title', type: 'string' }),
    defineField({ name: 'company', type: 'string' }),
    defineField({ name: 'date', title: 'Date range', type: 'string', description: 'e.g. Feb 2025 - Present' }),
    defineField({ name: 'description', type: 'text', rows: 5 }),
    defineField({ name: 'order', type: 'number', description: 'Lower numbers first (newest = 1)' }),
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'company' } },
});
