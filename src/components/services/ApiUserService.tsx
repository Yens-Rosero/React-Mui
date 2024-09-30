import axios from 'axios';

export interface User {
  login: string;
  id: number;
  name: string;
  url: string;
  avatar_url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export interface UserApiResponse {
  totalCount: number; 
  items: User[]; 
}

export const apiUserService = async (BASE_URL: string): Promise<UserApiResponse> => {
  try {
    const response = await axios.get<UserApiResponse>(`${BASE_URL}`);
    return {
      totalCount: response.data.totalCount, 
      items: response.data.items, 
      
    };
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};