'use client'
import React, { useEffect, useState } from 'react'

const Example = () => {

    const [forma, setForma] = useState('');

    const handleForma = (tipo) => {
        setForma(tipo);
        console.log(tipo);
    }

    const items = [
        {
            id: 1,
            name: 1,
            image: 'https://depor.com/resizer/rJ3wmAqqyv0d4P5GseqPgzzYjiM=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/G3L46DETJ5EWBAFD6FH3HTBF4I.jpg'
        },
        {
            id: 2,
            name: 2,
            image: 'https://laverdadnoticias.com/__export/1602076281481/sites/laverdad/img/2020/10/07/dragon_ball_5_extranxos_secretos_del_cuerpo_de_vegeta_que_nadie_sabia_.png_375107944.png'
        },
        {
            id: 3,
            name: 3,
            image: 'https://i.pinimg.com/originals/4c/71/cd/4c71cdd40df5fcac5ae89c2c2f2f13a3.jpg'
        }
    ]

    // useEffect(()=>{

    // }, [cuadrado, rectangular, redondo])



    return (
        <>
            <div className='flex gap-3 justify-center py-2'>
                <button onClick={()=> handleForma('redondo')} className='bg-blue-300 py-1 px-4 rounded-md'>Redondo</button>
                <button onClick={()=> handleForma('cuadrado')} className='bg-blue-300 py-1 px-4 rounded-md'>Cuadrado</button>
                <button onClick={()=> handleForma('rectangular')} className='bg-blue-300 py-1 px-4 rounded-md'>Rectangular</button>
            </div>

            <div className='flex justify-center gap-10 py-10'>
                {items.map(item => (
                    <div key={item.id} className={`w-32 h-32 shadow-lg bg-neutral-600 ${forma == 'redondo' ? 'rounded-full' : forma == 'cuadrado' ? 'w-32 h-32' : forma == 'rectangular' ? 'w-44' : '' }`}>
                        <img className={`w-full h-full object-fill ${forma == 'redondo' ? 'rounded-full' : forma == 'cuadrado' ? 'w-32 h-32' : forma == 'rectangular' ? 'w-44' : '' }`} src={item.image} alt="" />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Example