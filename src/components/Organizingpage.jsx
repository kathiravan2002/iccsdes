import React from 'react'
import Organizing from '../shared/components/Organizing'
import HelmetComponent from './HelmetComponent'

function Organizingpage() {
  return (
    <div>
      <HelmetComponent title={'Organizing Committee - International Conference on Computer Science and Digital Ecosystems Summit'} canonical={'https://iccsdes.com/organizing-committee'} />
      <Organizing />
    </div>
  )
}

export default Organizingpage