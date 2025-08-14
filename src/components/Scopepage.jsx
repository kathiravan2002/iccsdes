import React from 'react'
import Scope from '../shared/components/Scope'
import HelmetComponent from './HelmetComponent'

function Scopepage() {
  return (
    <div>
      <HelmetComponent title={'Scope of Conference - International Conference on Computer Science and Digital Ecosystems Summit'} canonical={'https://iccsdes.com/scope'} />
      <Scope />
    </div>
  )
}

export default Scopepage