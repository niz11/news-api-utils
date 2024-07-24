import axios from "axios";
import { getTopStories, getAllNews, getSimilarStoriesByUUID } from "../src/index";
import { ParamsObjectType } from "../src/thenewsapiTypes";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const apiToken = "your-api-token";
const locale = "ca";
const limit = "5";
const responseData = [
  { title: "Story 1" },
  { title: "Story 2" },
  { title: "Story 3" },
];

describe("getTopStories", () => {
  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  const baseUrl = "https://api.thenewsapi.com/v1/news/top?";
  it("fetches top stories correctly with locale and limit", async () => {
    const expectedUrl = `${baseUrl}api_token=${apiToken}&locale=${locale}&limit=${limit}`;
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
  it("Should build the URL correctly with a search term", async () => {
    const expectedUrl = `${baseUrl}api_token=${apiToken}&search=usd+%2B+gbp+-cad`;
    mockedAxios.get.mockResolvedValueOnce({ data: responseData });
    const paramsObject: ParamsObjectType = {
      api_token: apiToken,
      search: "usd + gbp -cad",
    };
    const result = await getTopStories(paramsObject);
    expect(axios.get).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual(responseData);
  });
  it("Should build the URL correctly with a categories term", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: responseData });
    const paramsObject: ParamsObjectType = {
      api_token: apiToken,
      categories: "science,sports",
    };
    const expectedUrl = `${baseUrl}api_token=${apiToken}&categories=science%2Csports`;
    const result = await getTopStories(paramsObject);
    expect(axios.get).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual(responseData);
  });

  it("Should build the URL correctly with a published_after term", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: responseData });
    const paramsObject: ParamsObjectType = {
      api_token: apiToken,
      published_after: "2024-07-23T10:00:00",
    };
    const expectedUrl = `${baseUrl}api_token=${apiToken}&published_after=2024-07-23T10%3A00%3A00`;
    const result = await getTopStories(paramsObject);
    expect(axios.get).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual(responseData);
  });

  it("build all above combined", async () => {
    const expectedUrl = `${baseUrl}api_token=${apiToken}&search=usd+%2B+gbp+-cad&categories=science%2Csports&published_after=2024-07-23T10%3A00%3A00`;
    mockedAxios.get.mockResolvedValueOnce({ data: responseData });
    const paramsObject: ParamsObjectType = {
      api_token: apiToken,
      search: "usd + gbp -cad",
      categories: "science,sports",
      published_after: "2024-07-23T10:00:00",
    };
    const result = await getTopStories(paramsObject);
    expect(axios.get).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual(responseData);
  });
});

describe("getSimilarStoriesByUUID", () => {
  it("fetches all news correctly with some params", async () => {
    const baseUrl = "https://api.thenewsapi.com/v1/news/all?";
    const expectedUrl = `${baseUrl}api_token=${apiToken}&search=usd+%2B+gbp+-cad&categories=science%2Csports&published_after=2024-07-23T10%3A00%3A00`;
    mockedAxios.get.mockResolvedValueOnce({ data: responseData });
    const paramsObject: ParamsObjectType = {
      api_token: apiToken,
      search: "usd + gbp -cad",
      categories: "science,sports",
      published_after: "2024-07-23T10:00:00",
    };
    const result = await getAllNews(paramsObject);
    expect(axios.get).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual(responseData);
  });
});

describe("getSimilarStoriesByUUID", () => {
  it("fetches all news correctly with some params", async () => {
    const baseUrl = "https://api.thenewsapi.com/v1/news/similar/xxxx?";
    const expectedUrl = `${baseUrl}api_token=${apiToken}&search=usd+%2B+gbp+-cad&categories=science%2Csports&published_after=2024-07-23T10%3A00%3A00`;
    mockedAxios.get.mockResolvedValueOnce({ data: responseData });
    const paramsObject: ParamsObjectType = {
      api_token: apiToken,
      search: "usd + gbp -cad",
      categories: "science,sports",
      published_after: "2024-07-23T10:00:00",
    };
    const result = await getSimilarStoriesByUUID('xxxx', paramsObject);
    expect(axios.get).toHaveBeenCalledWith(expectedUrl);
    expect(result).toEqual(responseData);
  });
});
