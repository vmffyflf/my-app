import React, {Component} from 'react';
import './style.css';
import './IsegyeIdol.js'
import image from 'C:\\Users\\wlsgh\\my-app\\src\\page\\img\\왁두.jfif'

function MainPage() {

    return (
        <div style={{padding: '0px', marginBottom: '100px', fontFamily: 'Raleway'}}>
            <div className={"wakgood"}><img src={image} className={"wakdo"}/>
            </div>
            <h1 className="waks"><span className={'accent'}>『우왁굳』</span></h1>
            <hr className={"wak"}/>
            <div className={"vertical"}>
                <p style={{fontSize: '20px', textAlign: 'center'}}><b><span className={'accent'}><a
                    href="https://www.youtube.com/user/woowakgood">우왁굳</a></span></b>은 트위치 파트너 스트리머 및 유튜브 크리에이터이다.</p>
                <p>
                    &nbsp;초창기 방송을 할 때 햄스터가 레일을 타다가 미끄러 떨어지는 움짤을 보고 프로필 사진으로 정하면서 그때부터 햄스터가 상징이 되었다.&nbsp;
                    우왁굳은 방송을 <b><span className={'accent'}>2008년 11월 경부터</span> </b>시작했으며 종합게임 스트리머이다.&nbsp;
                    현재 우왁굳은 1기와 2기로 나누어 지는데 처음 유명해지기 시작한건 09년도에
                    GTA4를 하면서 엄청난 인기를 모았다.&nbsp;
                    특히 빠른 노숙자는 당시 각종 인터넷사이트에 올라오며 큰 센세이션을 일으켰다.&nbsp;
                    2009년에 게임BJ들을 모아서 방송크루 <b><span className={'accent'}>우왁굳TV</span></b> 시즌 1을 결성하였다.&nbsp;
                    당시 인터넷 방송계에서 굉장한 인기를 구가했지만 2010년에 우왁굳이 개인적인
                    사정으로 우왁굳TV 시즌 1을 해체하면서 1기의 막을내렸다.&nbsp;<br/>
                    &nbsp;우왁굳TV 시즌 1을 해체한 이후 가끔 방송을 하다가 2011년에 복학을 위해서
                    일본으로 떠났으며 이때 저사양게임과 일본어 강의 방송을 간간이 진행하였다.&nbsp;
                    2013년 9월부터 떡밥을 던지더니 우왁굳TV 시즌2가 시작되었다.&nbsp;
                    1기때는 GTA를 주력으로 한 찰진 욕으로 인기를 모았지만 2기부터는 욕을 줄이는 대신
                    컨텐츠 개발에 주력하면서 시청자들과의 소통을 늘렸다.&nbsp;
                    <b><span className={'accent'}>우왁굳TV</span></b> 시즌2는 현재진행형이며 성장형 퇴물로 계속 전성기를 만들어내고있다.

                </p>
                <div>
                    <details style={{marginTop: '100px'}}>
                        <summary>유튜브 재생목록</summary>
                        <iframe style={{alignItem: 'center'}} width="560" height="315"
                                src="https://www.youtube.com/embed/videoseries?list=PLfASGV4peeDR20eG9x1FcaFdynFu5_fgc"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                        </iframe>
                    </details>
                </div>
            </div>
        </div>
    )
}


export default MainPage;
/*


*/


