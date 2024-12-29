const API_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=hY_0bKP4jMkl2hPUuMnm5rGaS-Xu-ygDuIkn6wbXrRf2mOrJPu0M6VROwzNKuo98Se-UWh3BbEe9AxkVgXIvXrfXb_P79Osdm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIONs2Ox7_Es2K09SRvyoRiiydX-tP1Bc_ckb5b5oXaNcSt-MBdsQVux_MGmO2ItVlgrLbxZkFEu-ctXRjCDfbc4rRxWkWgpVtz9Jw9Md8uu&lib=M7cSQCE0KZWQ8JoD5XuMfI4Dr_WGpAQrE';

export const fetchBlogPosts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};