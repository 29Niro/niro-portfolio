import { defineField, defineType } from 'sanity';
import { skillIconKeys } from '../../lib/skillIconKeys';

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'icon', type: 'string', options: { list: skillIconKeys }, description: 'Icon shown on the card' }),
    defineField({ name: 'group', type: 'string', options: { list: ['Languages', 'Frontend', 'Mobile', 'Backend', 'Databases', 'Automation', 'Cloud & DevOps', 'Design'] } }),
    defineField({ name: 'order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'group' } },
});
