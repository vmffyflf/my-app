import React from 'react';
import ReactDOM from 'react-dom';

function Contents() {
    let hrWidth = '80%';
    return (
        <div style={{paddingLeft: '24px'}}>
            <h1 style={{textAlign: 'left'}}>컨텐츠 모음</h1>
            <hr style={{maxWidth: '95%', marginLeft: '0px'}} />
            <details style={{marginLeft: '32px', marginTop: '16px'}}>
                <hr style={{maxWidth: hrWidth, marginLeft: '0px'}}/>
                <summary style={{fontSize: '24px'}}>게임</summary>
                <ul>
                    <li><p><a href={"https://www.youtube.com/watch?v=GfZGVtVrjBU&list=PLfASGV4peeDRjN43IAUD8E_ocPpQ-pLLj"}>마인크래프트 건축</a></p></li>
                    <li><p><a href={"https://www.youtube.com/watch?v=2oOrmRHFkSQ&list=PLLwKVa_5werJqvTDAHhDRyNH5XWneFSeu"}>팬 헌정 게임</a></p></li>
                    <li><p><a href={"https://www.youtube.com/watch?v=jCanKS4rVYo"}>VALORANT</a></p></li>
                    <li><p><a href={"https://www.youtube.com/watch?v=kO9gG43oUQE"}>Poppy Playtime</a></p></li>
                    <li><p><a href={"https://www.youtube.com/watch?v=IjP9CDUBjLg&list=PLfASGV4peeDS1RdVS9AbBPMBHIKaHNYBw"}>리그 오브 레전드</a></p></li>
                    <li><p><a href={"https://youtu.be/KNVNXzHAbTU"}>배틀그라운드</a></p></li>
                    <li><p><a href={"https://www.youtube.com/watch?v=6lBUz7ZWBws&list=PLj2A0z7arfU9NYHVRv9FDM9OeL6ApI4BV"}>그란투리스모</a></p></li>
                    <li><p><a href={"https://www.youtube.com/watch?v=KPTHM7TkRRI&list=PLn4Y4Ymvy_rUZa2ya71Ao-ggA_aaTb5mJ"}>피파</a></p></li>
                </ul>
            </details>
            <details style={{marginLeft: '32px', marginTop: '16px'}}>
                <hr style={{maxWidth: '90%', marginLeft: '0px'}}/>
                <summary style={{fontSize: '24px'}}>VR 컨텐츠</summary>
                <ul>
                <li><p><a href={"https://www.youtube.com/watch?v=MKwdjKKsUB0&list=PLruiCq6fco-8TipGsdPiep7mB3Y9VwLEw"}>vr챗 상황극</a></p></li>
                <li><p><a href={"https://www.youtube.com/watch?v=TzaER5VdZhs&list=PLkCiqR9B7eUKq5F7Yc-6GKNotpVmzUKqc"}>이세계 아이돌 오디션</a></p></li>
                <li><p><a href={"https://www.youtube.com/watch?v=RKdV-q00LKM&list=PLruiCq6fco-9QQ-r9EPa48AA7ZZ2UT3US"}>고정멤버 합방</a></p></li>
                <li><p><a href={"https://www.youtube.com/watch?v=4U0qOzg_XkM"}>VR 소개팅</a></p></li>
                <li><p><a href={"https://www.youtube.com/watch?v=KT-XDa5aB-E"}>VR 댄스배틀</a></p></li>
                </ul>
            </details>
            <details style={{marginLeft: '32px', marginTop: '16px'}}>
                <hr style={{maxWidth: '90%', marginLeft: '0px'}}/>
                <summary style={{fontSize: '24px'}}>Just Chatting</summary>
                <p style={{paddingLeft: '24px'}}>
                    <iframe width="460" height="275" src="https://www.youtube.com/embed/f05N_pYxQak"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </p>
                <p style={{paddingLeft: '24px'}}>
                    <iframe width="460" height="275" src="https://www.youtube.com/embed/OfX-8HLba1w"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </p>
                <p style={{paddingLeft: '24px'}}></p>
                <p style={{paddingLeft: '24px'}}></p>
            </details>
        </div>
    );
}


export default Contents;