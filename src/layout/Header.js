import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header className='head'>
        <Link to="/"><h2 id="title" > 
            등불을 밝혀죠!
        </h2></Link>
        <p>등불을 밝히고 마음을 나누세요</p>
        </header>
    )
}