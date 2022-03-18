import React from 'react'
import {shallow } from  'enzyme'
import {GifGridItem} from '../components/GifGridItem'


describe("pruebas en <GifGridItem/>", () => {

const title ="santiago ";
const url = "https://localhost/2.jpg"
const wrapper = shallow(<GifGridItem title={title} url={url}/>)

  test('debe de mostrar el componente correctamente', () =>{

      expect(wrapper).toMatchSnapshot()

  })
  test('debe de tener un parrafo con el title',()=>{
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe("santiago");
  })
  test('debe de teber la imagen igual al url y alt de los pros ', ()=> {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);

  })

  test('debe de tener animate__fadeIn',()=>{
    const div = wrapper.find('div')
    const className = div.prop('className')
     expect(className.includes('animate__fadeIn')).toBe(true)
  })

})
