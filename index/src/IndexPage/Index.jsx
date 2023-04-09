import React from 'react'
import '../IndexPage/Index.css'

const Index = () => {
  return (
      <div className='index-wrapper'>
          <div className='index-daejeon'>
              <h1><span className='big-red-strong'>일류 경제도시</span>대전</h1>
              <h1><span className='big-black-strong'>"지역의 <span className='point-red'>힘</span>으로 직접 주도"</span>하는<span className='last-big-black-strong'>대전의 미래</span></h1>
          </div>
          <div className='triangle-red'></div>
          <div className='triangle-blue'></div>
          <div className='triangle-red-bottom'></div>
          <div className='triangle-blue-bottom'></div>
          <div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  )
}

export default Index
