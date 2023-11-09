import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
    console.log('평균 구하는 함수 호출...');
    const total = numbers.reduce((a, b) => a + b, 0);
    const avg = Math.round((total / numbers.length) * 10) / 10;

    return avg;
};

const Average = () => {
    const [list, setlist] = useState([]);
    const [number, setNumber] = useState(0);

    const handleChange = useCallback((e) => setNumber(e.currentTarget.value), []); // 처음 마운트 될때 1번말 생성
    // const handleCilck = useCallback(() => setlist(list.concat(Number(number))), [list]);
    // const avg = useMemo(() => getAverage(list), [list, number]);

    //const handleClick = useCallback(()=> setlist(list=>list.concat(Number(number))),[number],);

    return (
        <>
            <input type="number" onChange={handleChange} />
            <button type="button" onClick={(handleCilck)}>평균 구하기</button>
            <ul>
                {list.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
            <div>평균 : {getAverage(list)}</div>
        </>
    );
};

export default React.memo(Average);