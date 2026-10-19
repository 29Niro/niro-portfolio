import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role (small text above heading)', type: 'string' }),
    defineField({ name: 'rotatingRoles', title: 'Rotating roles (hero)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'heroIntro', title: 'Hero intro', type: 'text', rows: 4 }),
    defineField({ name: 'availability', title: 'Availability badge text', type: 'string', description: 'Leave empty to hide the badge' }),
    defineField({ name: 'profileImage', title: 'Profile image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'cv', title: 'CV (PDF)', type: 'file' }),
    defineField({
      name: 'stats',
      title: 'Hero stats',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'title', type: 'string' },
        { name: 'count', type: 'number' },
      ] }],
    }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'phone', type: 'string' }),
    defineField({ name: 'address', type: 'string' }),
    defineField({
      name: 'socials',
      title: 'Social links',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'name', type: 'string', description: 'GitHub, LinkedIn, YouTube, Twitter, Instagram' },
        { name: 'url', type: 'url' },
      ] }],
    }),
    defineField({ name: 'aboutTitle', type: 'string' }),
    defineField({ name: 'aboutDescription', type: 'text', rows: 6 }),
    defineField({
      name: 'aboutInfo',
      title: 'About details (name/value rows)',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'fieldName', type: 'string' },
        { name: 'fieldValue', type: 'string' },
      ] }],
    }),
    defineField({ name: 'experienceIntro', type: 'text', rows: 4 }),
    defineField({ name: 'educationIntro', type: 'text', rows: 4 }),
    defineField({ name: 'skillsIntro', type: 'text', rows: 3 }),
    defineField({ name: 'seoTitle', type: 'string' }),
    defineField({ name: 'seoDescription', type: 'text', rows: 3 }),
    defineField({ name: 'ogImage', title: 'Social share image', type: 'image' }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
});
