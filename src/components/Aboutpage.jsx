import React from 'react'
import About from '../shared/components/About'
import HelmetComponent from './HelmetComponent'

function Aboutpage() {
  return (
    <div>
      <HelmetComponent title={'About us - International Conference on Computer Science and Digital Ecosystems Summit'} canonical={'https://iccsdes.com/about'}/>
      <About/>
      </div>
  )
}

export default Aboutpage