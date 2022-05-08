import React from 'react';

export default function Message(){
    return(
        <div>
            <back>
                <p>이전으로</p>
            </back>
        <div className='header'>
                <h2>
                    메세지를 남겨주세요
                </h2>
            </div>
            <div>
                <input type="text" placeholder='따뜻한 메세지를 남겨주세요!' >

                </input>
            </div>
            <div>
                <input type="text" placeholder='닉네임을 입력하세요(10자 이하)'></input>
            </div>
            <buttom>
                다음으로
            </buttom>

        </div>
        

    )
}