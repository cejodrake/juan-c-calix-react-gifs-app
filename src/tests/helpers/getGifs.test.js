import {getGifs} from  '../../helpers/getGifs'

describe('Pruebas con getGifs Fecth', ()=> {
  test('debe de traer 10 element',async ()=> {
    const gifs = await getGifs('One Punch')
    expect(gifs.length).toBe(10)
  })
})
