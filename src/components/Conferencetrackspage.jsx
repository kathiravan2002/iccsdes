import React from 'react'
import Conferencetracks from '../shared/components/Conferencetracks'
import HelmetComponent from './HelmetComponent'

function Conferencetrackspage() {
  return (
    <div>
      <HelmetComponent title={'Conference Tracks - International Conference on Computer Science and Digital Ecosystems Summit'} canonical={'https://iccsdes.com/conference-tracks'} />
      <Conferencetracks />
    </div>
  )
}

export default Conferencetrackspage