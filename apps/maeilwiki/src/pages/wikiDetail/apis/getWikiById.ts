import mainClient from '@/common/apis/client/mainClient';
import { API_ROUTES } from '@/common/apis/constants/routes';
import { Wiki } from '@/common/types/wiki';

export const getWikiById = async (id: number): Promise<Wiki> => {
  const data = await mainClient.get<Wiki>(`${API_ROUTES.wiki}/${id}`);

  return data;
};
