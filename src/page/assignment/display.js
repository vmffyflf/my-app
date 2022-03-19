import React, {Component} from 'react';
import './style.css';
import './IsegyeIdol.js'
import IsegyeIdol from "./IsegyeIdol";
import MainPage from "./MainPage";
import {Link, Routes, Route} from 'react-router-dom';

function Display() {
    return (
        <div>
            <header style={{
                backgroundColor: 'black',
                color: 'white'
            }}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1 style={{margin: '0px', padding: '8px', fontFamily: 'SuncheonB'}}>
                        <Link to='src/page/assignment/MainPage.js'>wakgood</Link>
                    </h1>
                    <p style={{margin: '0px', padding: '8px', marginTop: '4px'}}>
                        <a href="https://woowakgood.com/">왁물원</a>
                    </p>
                </div>
            </header>
            <nav style={{backgroundColor: 'gray', fontSize: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div>
                        <Link to='src/page/assignment/IsegyeIdol.js'>
                            이세계 아이돌
                        </Link>
                    </div>
                    <div>
                        <p><a href={'./IsegyeIdol.js'}>고정맴버</a></p>
                    </div>
                    <div>
                        <p><a href={'./IsegyeIdol.js'}>고맴무스메</a></p>
                    </div>
                    <div>
                        <p><a href={'./MainPage.js'}>어록</a></p>
                    </div>
                </div>
            </nav>

            <footer>

            </footer>
            <Routes>
            <Route path="src/page/assignment/MainPage.js" element={<MainPage/>}/>
            <Route path="src/page/assignment/IsegyeIdol.js" element={<IsegyeIdol/>}/>
            </Routes>
        </div>
    )
}

export default Display;