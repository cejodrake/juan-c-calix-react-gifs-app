import React from 'react'
import {shallow } from  'enzyme'
import {AddCategory} from '../components/AddCategory'


describe('test in componente AddCategory', ()=> {
const setCategories = ()=>{

}


  test(' debe de mostrarse correctament ', ()=>{
    const wrapper = shallow(<AddCategory/>)
    expect(wrapper).toMatchSnapshot();
  })

})
