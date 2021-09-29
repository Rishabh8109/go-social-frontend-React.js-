import React from 'react';
import Posts from '../component/Posts'
import Stories from '../component/Stories'
import UploadPost from '../component/UploadPost'


export default function Home() {
  return (
    <div className="main">
      <UploadPost />
      <Stories />
      <Posts />
    </div>
  )
}
