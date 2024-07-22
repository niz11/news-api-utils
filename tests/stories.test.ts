import axios from 'axios';
import { getTopStories } from '../src/index';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('fetches top stories correctly', async () => {
  const apiToken = 'your-api-token';
  const country = 'ca';
  const limit = 5;
  const responseData = [{ title: 'Story 1' }, { title: 'Story 2' }, { title: 'Story 3' }];
  const expectedUrl = `https://api.thenewsapi.com/v1/news/top?api_token=${apiToken}&locale=${country}&limit=${limit}`;

  mockedAxios.get.mockResolvedValueOnce({ data: responseData });

  const result = await getTopStories(apiToken, country, limit);

  expect(axios.get).toHaveBeenCalledWith(expectedUrl);
  expect(result).toEqual(responseData);
});