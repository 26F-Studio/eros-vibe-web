import { api } from 'boot/axios';

export const connectWifi = async (ssid: string, password: string): Promise<boolean | undefined> => {
  const data = new URLSearchParams();
  data.append('ssid', ssid);
  data.append('password', password);
  try {
    return (await api.post<boolean>(`/api/v1/net/wifi`, data)).data;
  } catch (e) {
    console.error(e);
  }
};
