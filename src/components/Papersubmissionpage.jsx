import React from 'react'
import Papersubmission from '../shared/components/Papersubmission'
import HelmetComponent from './HelmetComponent'

function Papersubmissionpage() {
  return (
    <div>
      <HelmetComponent title={'Paper Submission - International Conference on Computer Science and Digital Ecosystems Summit'} canonical={'https://iccsdes.com/paper-submission'} />
      <Papersubmission />
    </div>
  )
}

export default Papersubmissionpage