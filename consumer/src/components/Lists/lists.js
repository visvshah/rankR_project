import React from 'react'
import {useSelector} from 'react-redux'
import List from "./List/list.js"
export default function Lists(){
  const lists = useSelector((state) => state.lists);
  console.log(lists);
  return (
    <div>
        <h1>lists</h1>
        <List/>
        <List/>
    </div>
  )
}
