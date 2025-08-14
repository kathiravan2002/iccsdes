import React from 'react'
import Editorial from '../shared/components/Editorial'
import HelmetComponent from './HelmetComponent'

function Editorialpage() {
  return (
    <div>
      <HelmetComponent title={'Editorial Board - International Conference on Computer Science and Digital Ecosystems Summit'} canonical={'https://iccsdes.com/editorial-board'} />
      <Editorial />
    </div>
  )
}

export default Editorialpage