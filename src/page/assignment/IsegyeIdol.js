import React from 'react';
import ine from 'C:\\Users\\wlsgh\\my-app\\src\\page\\img\\아이네.png';
import jing from 'C:\\Users\\wlsgh\\my-app\\src\\page\\img\\징버거.png';
import lilpa from 'C:\\Users\\wlsgh\\my-app\\src\\page\\img\\릴파.jfif';
import cotten from 'C:\\Users\\wlsgh\\my-app\\src\\page\\img\\주르르.png';
import gosegu from 'C:\\Users\\wlsgh\\my-app\\src\\page\\img\\고세구.png';
import vichan from 'C:\\Users\\wlsgh\\my-app\\src\\page\\img\\비챤.jfif';


function IsegyeIdol() {
    return (
        <div style={{padding: '0px'}}>
            <p align={"middle"} style={{padding: '1', backgroundColor: '#e64371', paddingBottom: '0'}}>
                <img style={{width: "100%"}}
                     src={'https://yt3.ggpht.com/pqvOaDL8GZzmiD75caWvuAPNtgTTrHBJTZg2fESmElWpErM0peGslp_DJUGGyQJTTLv-IfIfwA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'}/>
            </p>
            <div style={{textAlign: 'center', justifyContent: 'center'}}>
                <b style={{fontSize: '20px'}}>『둘, 셋 차원을 넘어! 안녕하세요, 이세계 아이돌입니다!』</b>
                <p>
                    <b className={'iseg'}><a href={"https://www.youtube.com/c/welshcorgimessi"}
                                             style={{color: '#e64371'}}>이세계 아이돌</a></b>은 우왁굳이 기획한 메타버스 아이돌이며 현재 2집 가수이다.
                </p>

                <table border={'1'} style={{justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                    <tr>
                        <td>아이네</td>
                        <td>징버거</td>
                        <td>릴파</td>
                        <td>주르르</td>
                        <td>고세구</td>
                        <td>비챤</td>
                    </tr>
                    <tr>
                        <td><img src={ine} style={{width: '100px', height: '100px'}}/></td>
                        <td><img src={jing} style={{width: '100px', height: '100px'}}/></td>
                        <td><img src={lilpa} style={{width: '100px', height: '100px'}}/></td>
                        <td><img src={cotten} style={{width: '100px', height: '100px'}}/></td>
                        <td><img src={gosegu} style={{width: '100px', height: '100px'}}/></td>
                        <td><img src={vichan} style={{width: '100px', height: '100px'}}/></td>
                    </tr>
                    <tr>
                        <td><a href={'https://url.kr/s3415m'} style={{color: 'red'}}>유튜브</a>&nbsp;<a
                            href={'https://www.twitch.tv/vo_ine'}>트위치</a></td>
                        <td><a href={'https://www.youtube.com/c/%EC%A7%95%EB%B2%84%EA%B1%B0'} style={{color: 'red'}}>유튜브</a>&nbsp;<a
                            href={'https://www.twitch.tv/jingburger'}>트위치</a></td>
                        <td><a href={'https://www.youtube.com/channel/UC-oCJP9t47v7-DmsnmXV38Q'} style={{color: 'red'}}>유튜브</a>&nbsp;<a
                            href={'https://www.twitch.tv/lilpaaaaaa'}>트위치</a></td>
                        <td><a href={'https://www.youtube.com/c/%EC%A3%BC%EB%A5%B4%EB%A5%B4'} style={{color: 'red'}}>유튜브</a>&nbsp;<a
                            href={'https://www.twitch.tv/cotton__123'}>트위치</a></td>
                        <td><a href={'https://www.youtube.com/channel/UCV9WL7sW6_KjanYkUUaIDfQ'} style={{color: 'red'}}>유튜브</a>&nbsp;<a
                            href={'https://www.twitch.tv/gosegugosegu'}>트위치</a></td>
                        <td><a href={'https://www.youtube.com/channel/UCs6EwgxKLY9GG4QNUrP5hoQ'} style={{color: 'red'}}>유튜브</a>&nbsp;<a
                            href={'https://www.twitch.tv/viichan6'}>트위치</a></td>
                    </tr>


                </table>
                <br/>
                <p style={{marginLeft: '370px', marginRight: '370px', textAlign: 'left'}}>
                    이세계아이돌의 맴버는 총원 6명이고 다들 선발과정을 거쳐서 들어오게 되었다.
                    오디션 과정은 일반적인 공중파 오디션의 포멧을 일부 모방하여 진행된 1차 오디션부터 최종까지 50일이 소요 되었다.
                    사전녹화를 편집해서 올리는 공중파 오디션과는 달리 인터넷방송 특성을 살려서 모든 선발과정이 생방송으로 진행되었으며
                    시청자와 방송 출연진과의 쌍방향 소통이 이루어 졌다.
                    우왁굳은 통칭 '이세돌'을 건전하게 키우기 위해서 엄격한 활동규정을 정했다.
                    대표적으로는 '합방금지','영도금지'등이 있다.



                </p>
            </div>
        </div>

    )
}

export default IsegyeIdol;