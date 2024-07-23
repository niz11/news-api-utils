import axios from "axios";
import { getTopStories } from "../src/index";
import { ParamsObjectType } from "../src/thenewsapiTypes";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getTopStories", () => {
  it("fetches top stories correctly with locale and limit", async () => {
    const apiToken = "your-api-token";
    const locale = "ca";
    const limit = "5";
    const responseData = [
      { title: "Story 1" },
      { title: "Story 2" },
      { title: "Story 3" },
    ];
    const expectedUrl = `https://api.thenewsapi.com/v1/news/top?api_token=${apiToken}&locale=${locale}&limit=${limit}`;

    mockedAxios.get.mockResolvedValueOnce({ data: responseData });
    const paramsObject: ParamsObjectType = {
      api_token: apiToken,
      locale: locale,
      limit: limit,
    };
    const result = await getTopStories(paramsObject);

    expect(axios.get).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual(responseData);
  });
});
