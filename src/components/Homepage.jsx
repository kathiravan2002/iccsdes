import React from 'react'
import Home from '../shared/components/Home'
import HelmetComponent from './HelmetComponent'

function Homepage() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Computer Science and Digital Ecosystems Summit'} canonical={'https://iccsdes.com/'} />
      <Home />
    </div>
  )
}

export default Homepage