import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({ title, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content="ICCSDES, International Conference on Computer Science and Digital Ecosystems Summit  ,computer science conference, digital ecosystems conference, AI conference, machine learning conference, big data, IoT, cloud computing, blockchain, cybersecurity, research conference, academic conference, technology innovations, paper submission, call for papers" />
      <meta name="description" content="The International Conference on Computer Science and Digital Ecosystems Summit 2025 brings together global researchers, innovators, and industry leaders to explore breakthroughs in computer science, AI, and digital ecosystems." />
      <meta name="author" content="ICCSDES Editorial Team" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="International Conference on Computer Science and Digital Ecosystems Summit" />
      <meta property="og:description" content="The International Conference on Computer Science and Digital Ecosystems Summit 2025 brings together global researchers, innovators, and industry leaders to explore breakthroughs in computer science, AI, and digital ecosystems." />
      <meta property="og:url" content="https://iccsdes.com/" />
      <meta property="og:image" content="https://iccsdes.com/assets/images/ICCSDES logo.png" />

      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/png" href="https://iccsdes.com/assets/images/ICCSDES fav.png" />

    </Helmet>
  )
}

export default HelmetComponent