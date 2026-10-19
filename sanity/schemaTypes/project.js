import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'category', type: 'string', options: { list: ['Frontend', 'Fullstack', 'Mobile', 'Backend', 'Design'] } }),
    defineField({ name: 'summary', title: 'Short summary (cards)', type: 'text', rows: 3 }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 8 }),
    defineField({ name: 'caseStudy', title: 'Case study (optional)', type: 'blockContent' }),
    defineField({ name: 'stack', title: 'Tech stack', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'image', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'live', title: 'Live URL', type: 'url' }),
    defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
    defineField({ name: 'featured', title: 'Show on home page', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', type: 'number', description: 'Lower numbers first' }),
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
});
