import React from 'react'
import PostForm from './PostForm'
import Post from './Post'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboardWrapper'>
      <Post />
      <PostForm />      
    </div>
  )
}

export default Dashboard
