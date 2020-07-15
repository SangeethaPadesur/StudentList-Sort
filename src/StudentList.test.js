import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import StudentList from './StudentList';

const component = ()=>{
  <StudentList/>
}

test('test component render',async()=>{
  let comp = render(<StudentList/>)
  await wait()
  comp.getByText('Student List')
  comp.getByText('Name:David')
})
test('test component render for Name',async()=>{
    let comp = render(<StudentList/>)
    await wait()
    comp.getByText('Name:David')
  })
test('test component render for Name',async()=>{
    let comp = render(<StudentList/>)
    await wait()
    comp.getByText('Name:David')
})
test('test component render for Name',async()=>{
    let comp = render(<StudentList/>)
    await wait()
    let btn = comp.getByTestId('sort-btn')
    fireEvent.click(btn)
    let score = comp.getByText('Score')
    fireEvent.click(score)
    await wait()
    let sorted = comp.getByTestId('score-1')
})