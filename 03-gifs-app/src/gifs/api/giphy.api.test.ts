import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphyApi', () => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY
  const apiUrl = import.meta.env.VITE_GIPHY_API_URL
  const apiLang = import.meta.env.VITE_GIPHY_API_LANG

  test('should be configured correctly', () => {
    const params = giphyApi.defaults.params
    console.log(params)

    expect(giphyApi.defaults.baseURL).toBe(apiUrl)
    expect(params).toStrictEqual({
      'api_key': apiKey,
      'lang': apiLang
    })
  })
})