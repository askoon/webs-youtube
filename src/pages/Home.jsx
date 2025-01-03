import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Portfolio from '../components/contents/Portfolio'
import Youtube from '../components/contents/Youtube'
import Developer from '../components/contents/Developer'
import Gsap from '../components/contents/Gsap'

const Home = () => {
    return (
        <Main 
            title = "웹스토리보이 유튜브"
            description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다.">
            <Today />
            <Developer />
            <Webd />
            <Website />
            <Gsap />
            <Portfolio />
            <Youtube />
        </Main>
    )
}

export default Home
