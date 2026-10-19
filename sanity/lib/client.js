import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion } from '../env';

export const client = createClient({
  projectId: projectId || 'unset',
  dataset,
  apiVersion,
  useCdn: false,
});
