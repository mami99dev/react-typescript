import { describe, expect, test } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";
import AxiosMockAdapter from "axios-mock-adapter"
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from '../../../tests/mocks/giphy.response.data';
import { gifsMock } from '../../../tests/mocks/gifs.data';

describe('get-gifs-by-query', async () => {
  const axiosMock = new AxiosMockAdapter(giphyApi)

  // test('should return a list of gifs', async () => {
  //   const gifs = await getGifsByQuery('cr7')
  //   console.log(gifs)
  //   const [gif1] = gifs

  //   expect(gifs.length).toBe(10)

  //   expect(gif1).toStrictEqual({
  //     id: expect.any(String),
  //     height: expect.any(Number),
  //     width: expect.any(Number),
  //     title: expect.any(String),
  //     url: expect.any(String)
  //   })
  // })

  // test('should return a list of mock gifs', async () => {
  //   const gifs = await getGifsByQuery('cr7')

  //   expect(gifs).toStrictEqual(gifsMock)
  // })

  test('should return a list of mock gifs', async () => {
    axiosMock.onGet('/search').reply(200, giphySearchResponseMock)

    const gifs = await getGifsByQuery('cr7')
    console.log(gifs)

    expect(gifs.length).toBe(10)
  })
})