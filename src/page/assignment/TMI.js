import React from 'react';

function TMI() {
    const ulStyle = {lineHeight: '28px'};
    return (
        <div style={{paddingLeft: '24px'}}>
            <h1>~Too much infomation~</h1>
            <h2>컴터 사양</h2>
            <ul style={ulStyle}>
                <li>CPU: Intel Core i9-10900K Avengers Edition</li>
                <li>메인보드: MSI MEG Z490 GODLIKE</li>
                <li>RAM: 삼성 DDR4 128GB 2666Mhz (32GB x4)</li>
                <li>SSD: WD BLACK SN750 2TB</li>
                <li>GPU: MSI RTX 3080 슈프림 D6X 10GB</li>
                <li>파워서플라이: Antec HCG 850W 80PLUS GOLD 풀 모듈러</li>
                <li>케이스: MSI MPG 세키라 500X</li>
                <li>쿨링: MSI MAG CORE LIQUID 360R</li>
                <li>OS: Windows 10</li>
            </ul>
            <h2>우왁굳의 건강상태</h2>
            <p>한 마디로 매우 안좋다.</p>
            <details className={"no"}>
                <summary style={{fontSize: '16px'}}>건강 검진 결과</summary>
                <ul style={ulStyle}>
                    <li>갑상선쪽 종양</li>
                    <li>배 위쪽 종양</li>
                    <li>간 수치 높음</li>
                    <li>혈중 콜레스트롤 수치 높음</li>
                    <li>고밀도 지단백 감소</li>
                    <li>혈관지방 매우 높음</li>
                    <li>동맥경화, 뇌출혈 가능성 높음</li>
                    <li>경추에 디스크 돌출및 팽윤 존재(디스크4개)</li>
                </ul>
            </details>
            <h2>어록</h2>
            <ul style={ulStyle}>
                <li>알잘딱깔센(알아서 잘 딱 깔끔하고 센스있게)</li>
                <li>제발 니 인생에 훈수하세요.(제니훈)</li>
                <li>레게노</li>
                <li>응 없어~</li>
                <li>정신병이야 임마!</li>
                <li>킹아</li>
            </ul>
            <hr/>
            <ul>
                <li><span style={{fontSize: '20px'}}>뱅갈고무나무를 키우고있다</span></li>
                <li><span style={{fontSize: '20px'}}>본인이 만든 버츄얼 아이돌 이세계 아이돌의 곡 작사를 본인이 직접 하고 있다.</span></li>
                <li><span style={{fontSize: '20px'}}>방송 인생에서 가장 큰 후원금액이 10,000,000원이다.</span></li>
            </ul>
        </div>
    );
}

export default TMI;