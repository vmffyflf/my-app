import React, {Component} from 'react';
import './style.css';
import './IsegyeIdol.js'
import image from 'C:\\Users\\wlsgh\\my-app\\src\\page\\img\\왁두.jfif'

function MainPage() {

    return (
        <div>
            <div className={"wakgood"}><img src={image} style={{width: '150px', height: '200px', padding: '10px'}}/>
            </div>
            <h1 style={{textAlign: 'center', margin: '0px'}}>『우왁굳』</h1>
            <p style={{
                textAlign: 'center'
            }}>
                <hr style={{border: '2px solid #808000', borderRadius: '24px', size: 50, width: '50%'}}/>
                <b>우왁굳은 트위치 파트너 스트리머 및 유튜브 크리에이터이다.</b> <br/>
                <b>상징은 햄스터.
                    초창기 방송을 할 때 햄스터가 레일을 타다가 미끄러 떨어지는 움짤을 보고 프로필 사진으로 정하면서
                    그때부터 햄스터가 상징이 되었다.
                </b>

            </p>


        </div>

    )
}


export default MainPage;
/*


*/


