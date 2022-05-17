import React, {Component} from 'react';
import './style.css';
import './IsegyeIdol.js'
import IsegyeIdol from "./IsegyeIdol";
import MainPage from "./MainPage";
import Gomem from "./Gomem";
import Contents from "./Contents"
import TMI from "./TMI";
import {Link, Routes, Route} from 'react-router-dom';

function Display() {
    return (
        <div>
            <header className="header" style={{
                backgroundColor: 'black',
                color: 'white'
            }}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1 style={{margin: '0px', padding: '6px', fontFamily: 'SuncheonB'}}>
                        <Link to='src/page/assignment/MainPage.js'>wakgood</Link>
                    </h1>
                    <p style={{margin: '0px', padding: '9px', marginTop: '7px'}}>
                        <a href="https://cafe.naver.com/steamindiegame.cafe" style={{fontSize: '20px'}}
                           target={'_blank'}>왁물원</a>
                    </p>
                </div>
            </header>
            <nav className="nav" style={{backgroundColor: 'gray', fontSize: '20px', height: '34px'}}>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div>
                        <Link to='src/page/assignment/IsegyeIdol.js'>
                            이세계 아이돌
                        </Link>
                    </div>
                    <div>
                        <Link to='src/page/assignment/Gomem.js'>
                            고정맴버
                        </Link>
                    </div>
                    <div>
                        <Link to='src/page/assignment/Contents.js'>
                            컨텐츠
                        </Link>
                    </div>
                    <div>
                        <Link to='src/page/assignment/TMI.js'>
                            TMI
                        </Link>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="src/page/assignment/MainPage.js" element={<MainPage/>}/>
                <Route path="src/page/assignment/IsegyeIdol.js" element={<IsegyeIdol/>}/>
                <Route path="src/page/assignment/Gomem.js" element={<Gomem/>}/>
                <Route path="src/page/assignment/Contents.js" element={<Contents/>}/>
                <Route path="src/page/assignment/TMI.js" element={<TMI/>}/>
            </Routes>
        </div>
    )
}

export default Display;