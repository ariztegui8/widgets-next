'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const Example = () => {

    const [forma, setForma] = useState('');
    const [video, setVideo] = useState('')
    const [navegaror, setNavegator] = useState({
        logo: '',
        fondoNavbar: '#e5e7eb',
        colorText: '#000000',
        btnNavbar: '#93c5fd',
        backgroundFondo: '#ffffff'

    })
    const [banner, setBanner] = useState({
        imageBanner: '',
        title: '',
        subtitle: '',
        titleBtn: '',
        colorTitle: '#ffffff',
        colorSubtitle: '#ffffff',
        colorBtnText: '#000000',
        colorBtnFondo: '#93c5fd',
    })

    const { imageBanner, title, subtitle, titleBtn, colorTitle, colorSubtitle, colorBtnText, colorBtnFondo } = banner
    const { logo, fondoNavbar, colorText, btnNavbar, backgroundFondo } = navegaror

    const handleForma = (tipo) => {
        setForma(tipo);
        // console.log(tipo);
    }

    const handleLogo = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNavegator({
                    logo: reader.result
                })
            };
            reader.readAsDataURL(file)
        }
        // console.log('logo', logo);
    };

    const handleImageBanner = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBanner({
                    imageBanner: reader.result
                })
            };
            reader.readAsDataURL(file)
        }
        // console.log('banner', banner);
    };

    const handleChangeBanner = e => {
        setBanner({
            ...banner,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeVideo = e => {
        setVideo(e.target.value)
    }

    const handleChangeNavigator = e => {
        setNavegator({
            ...navegaror,
            [e.target.name]: e.target.value
        })
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

    const cards = [
        {
            id: 1,
            name: 1,
            image: 'https://i.pinimg.com/originals/40/c3/32/40c33209a73ec1ec536ad93278314a22.jpg'
        },
        {
            id: 2,
            name: 2,
            image: 'https://www.solofondos.com/wp-content/uploads/2018/05/Goku-SSJ-God-postal.jpg'
        },
        {
            id: 3,
            name: 3,
            image: 'https://areajugones.sport.es/wp-content/uploads/2020/04/dragon-ball-23.jpg'
        }
    ]



    return (
        <>

            <div className='flex flex-col lg:flex-row gap-2  px-2 py-2'>
                <div className='w-full lg:w-1/4 relative'>
                    <div className='bg-blue-300 rounded-md p-2 sticky top-0 h-lvh overflow-y-scroll custom-scrollbar'>
                        <details className="collapse collapse-arrow bg-base-200 mb-2">
                            <summary className="collapse-title text-md font-medium">Fondo</summary>
                            <div className="collapse-content">
                                <div className='flex items-center justify-between gap-4 mb-2'>
                                    <p className='text-md font-semibold'>Color fondo:</p>
                                    <input
                                        className='cursor-pointer'
                                        type="color"
                                        onChange={handleChangeNavigator}
                                        name="backgroundFondo"
                                        value={backgroundFondo}
                                    />
                                </div>
                            </div>
                        </details>

                        <details className="collapse collapse-arrow bg-base-200 mb-2">
                            <summary className="collapse-title text-md font-medium">Navbar</summary>
                            <div className="collapse-content">
                                <p className='text-md font-semibold mb-1'>Image logo:</p>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered w-full mb-3"
                                    onChange={handleLogo}
                                />
                                <div className='flex items-center justify-between gap-4 mb-2'>
                                    <p className='text-md font-semibold'>Color fondo:</p>
                                    <input
                                        className='cursor-pointer'
                                        type="color"
                                        onChange={handleChangeNavigator}
                                        name="fondoNavbar"
                                        value={fondoNavbar}
                                    />
                                </div>
                                <div className='flex items-center justify-between gap-4 mb-2'>
                                    <p className='text-md font-semibold'>Color texto:</p>
                                    <input
                                        className='cursor-pointer'
                                        type="color"
                                        onChange={handleChangeNavigator}
                                        name="colorText"
                                        value={colorText}
                                    />
                                </div>

                                <div className='flex items-center justify-between gap-4 mb-2'>
                                    <p className='text-md font-semibold'>Color boton:</p>
                                    <input
                                        className='cursor-pointer'
                                        type="color"
                                        onChange={handleChangeNavigator}
                                        name="btnNavbar"
                                        value={btnNavbar}
                                    />
                                </div>
                            </div>
                        </details>

                        <details className="collapse collapse-arrow bg-base-200 mb-2">
                            <summary className="collapse-title text-md font-medium">Banner</summary>
                            <div className="collapse-content">
                                <p className='text-md font-semibold mb-1'>Image banner:</p>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered w-full mb-3"
                                    onChange={handleImageBanner}
                                />

                                <input
                                    type="text"
                                    placeholder="Title"
                                    className="input input-bordered w-full mb-2"
                                    name='title'
                                    value={title}
                                    onChange={handleChangeBanner}
                                />
                                <div className='flex items-center justify-between gap-4 mb-2'>
                                    <p className='text-md font-semibold'>Color title:</p>
                                    <input
                                        className='cursor-pointer'
                                        type="color"
                                        onChange={handleChangeBanner}
                                        name="colorTitle"
                                        value={colorTitle}
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="Subtitle"
                                    className="input input-bordered w-full mb-2"
                                    name='subtitle'
                                    value={subtitle}
                                    onChange={handleChangeBanner}
                                />
                                <div className='flex items-center justify-between gap-4 mb-2'>
                                    <p className='text-md font-semibold'>Color subtitle:</p>
                                    <input
                                        className='cursor-pointer'
                                        type="color"
                                        onChange={handleChangeBanner}
                                        name="colorSubtitle"
                                        value={colorSubtitle}
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="Button"
                                    className="input input-bordered w-full mb-2"
                                    name='titleBtn'
                                    value={titleBtn}
                                    onChange={handleChangeBanner}
                                />
                                <div className='flex items-center justify-between gap-4 mb-2'>
                                    <p className='text-md font-semibold'>Color btn text:</p>
                                    <input
                                        className='cursor-pointer'
                                        type="color"
                                        onChange={handleChangeBanner}
                                        name="colorBtnText"
                                        value={colorBtnText}
                                    />
                                </div>

                                <div className='flex items-center justify-between gap-4 mb-2'>
                                    <p className='text-md font-semibold'>Color btn fondo:</p>
                                    <input
                                        className='cursor-pointer'
                                        type="color"
                                        onChange={handleChangeBanner}
                                        name="colorBtnFondo"
                                        value={colorBtnFondo}
                                    />
                                </div>
                            </div>
                        </details>

                        <details className="collapse collapse-arrow bg-base-200 mb-2">
                            <summary className="collapse-title text-md font-medium">Change Avatar</summary>
                            <div className="collapse-content">
                                <div className='flex flex-col gap-3 justify-center py-2'>
                                    <button onClick={() => handleForma('redondo')} className='bg-blue-300 py-1 px-4 rounded-md'>Redondo</button>
                                    <button onClick={() => handleForma('cuadrado')} className='bg-blue-300 py-1 px-4 rounded-md'>Cuadrado</button>
                                    <button onClick={() => handleForma('rectangular')} className='bg-blue-300 py-1 px-4 rounded-md'>Rectangular</button>
                                </div>
                            </div>
                        </details>

                        <details className="collapse collapse-arrow bg-base-200 mb-2">
                            <summary className="collapse-title text-md font-medium">Footer</summary>
                            <div className="collapse-content">

                            </div>
                        </details>

                        <details className="collapse collapse-arrow bg-base-200 mb-2">
                            <summary className="collapse-title text-md font-medium">Video</summary>
                            <div className="collapse-content">
                                <input
                                    type="text"
                                    placeholder="ID del video ej, TPKGBmGJCXw"
                                    className="input input-bordered w-full mb-2"
                                    name='video'
                                    value={video}
                                    onChange={handleChangeVideo}
                                />
                            </div>
                        </details>
                    </div>
                </div>

                <div style={{ background: backgroundFondo ? backgroundFondo : '#ffffff' }} className='w-full lg:w-3/4'>
                    {/* NAVBAR */}
                    <div style={{ background: fondoNavbar ? fondoNavbar : '#e5e7eb' }} className='flex justify-between items-center px-10 py-2'>
                        <img className='w-[150px] h-[50px]' src={logo ? logo : 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Dragon_Ball_Z_Logo_A.png'} alt="" />
                        <div className='flex gap-3'>
                            <button style={{ background: btnNavbar ? btnNavbar : '#93c5fd', color: colorText ? colorText : '#000000' }} className='py-2 px-4 rounded-md'>Btn 1</button>
                            <button style={{ background: btnNavbar ? btnNavbar : '#93c5fd', color: colorText ? colorText : '#000000' }} className='py-2 px-4 rounded-md'>Btn 2</button>
                        </div>
                    </div>

                    {/* BANNER */}
                    <div className='mb-16 relative flex justify-center items-center'>
                        <>
                            <img className='w-full h-[300px]' src={imageBanner ? imageBanner : 'https://i.pinimg.com/originals/fc/b3/5f/fcb35fc65a3188f2ee006e57a4183e92.png'} alt="" />
                            <div className='absolute text-center'>
                                <h1 style={{ color: colorTitle ? colorTitle : '#ffffff' }} className='text-5xl text-white font-bold mb-1'>{title ? title : 'Title'}</h1>
                                <p style={{ color: colorSubtitle ? colorSubtitle : '#ffffff' }} className='text-xl font-semibold  text-white mb-3'>{subtitle ? subtitle : 'subtitle'}</p>
                                <button style={{ background: colorBtnFondo ? colorBtnFondo : '#93c5fd', color: colorBtnText ? colorBtnText : '#000000' }} className='bg-blue-300 py-2 px-4 rounded-md font-semibold'>{titleBtn ? titleBtn : 'Button'}</button>
                            </div>
                        </>
                    </div>

                    {/* AVATARS */}
                    <div className='flex flex-col items-center justify-center gap-10 mb-16 md:flex-row md:items-start'>
                        {items.map(item => (
                            <div key={item.id} className={`w-40 h-40 shadow-lg bg-neutral-600 ${forma == 'redondo' ? 'rounded-full' : forma == 'cuadrado' ? 'w-40 h-40' : forma == 'rectangular' ? 'w-52' : ''}`}>
                                <img className={`w-full h-full object-fill ${forma == 'redondo' ? 'rounded-full' : forma == 'cuadrado' ? 'w-40 h-40' : forma == 'rectangular' ? 'w-52' : ''}`} src={item.image} alt="" />
                            </div>
                        ))}
                    </div>

                    {/* CARDS */}
                    <div className='flex flex-col items-center justify-center gap-10 mb-16 md:flex-row md:items-start'>
                        {cards.map(card => (
                            <div key={card.id} className='shadow-lg w-72 rounded-md' >
                                <div className='h-40'>
                                    <img className='w-full h-full rounded-t-lg' src={card.image} alt="" />
                                </div>
                                <div className='p-3'>
                                    <p className='text-lg font-semibold mb-3'>Lorem</p>
                                    <p className='text-sm mb-6'>Lorem ipsun del asdhdnu asdu yhdasbu a</p>
                                    <div className='flex justify-end'>
                                        <button className='bg-blue-300 py-2 px-4 rounded-md font-semibold'>Buton</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* VIDEO */}
                    {video ?
                        <div className='w-full mb-16 flex items-center justify-center'>
                            <iframe className='w-3/4 h-80' src={`https://www.youtube.com/embed/${video}`} title="TREMENDO ESPECTÁCULO dan Juan Ariztegui vs. &quot;La Villerita&quot; de Toloza - El Caldén 2023 | Cristian" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
                        </div>

                        : 
                       <div>
                         <p className='m-auto text-center text-xl font-semibold mb-16'>Agregue un enlace para visualizar el video</p>
                       </div>
                    }


                    {/* FOOTER */}
                    <div>
                        <div className='grid grid-cols-1 text-center gap-4 px-10 py-10 bg-gray-200 md:grid-cols-4 md:text-start'>
                            <div className='m-auto md:m-0'>
                                <img className='w-[100px] h-[40px]' src={logo ? logo : 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Dragon_Ball_Z_Logo_A.png'} alt="" />
                            </div>

                            <div>
                                <p className='text-lg font-medium mb-1'>Acerca de</p>
                                <Link href="#"><p className='text-sm'>Prensa</p></Link>
                                <Link href="#"><p className='text-sm'>Mapa</p></Link>
                                <Link href="#"><p className='text-sm'>Condiciones</p></Link>
                                <Link href="#"><p className='text-sm'>Política de privacidad</p></Link>
                            </div>

                            <div>
                                <p className='text-lg font-medium mb-1'>Nosotros</p>
                                <Link href="#" className='text-sm'>Blog<p></p></Link>
                                <Link href="#" className='text-sm'>GitHub<p></p></Link>
                                <Link href="#" className='text-sm'>Discord<p></p></Link>
                                <Link href="#" className='text-sm'>Youtube<p></p></Link>

                            </div>

                            <div>
                                <p className='text-lg font-medium mb-1'>Ayuda</p>
                                <Link href="#" className='text-sm'><p>Contacto</p></Link>
                                <Link href="#" className='text-sm'><p>Centro de ayuda</p></Link>
                                <Link href="#" className='text-sm'><p>Empleo</p></Link>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-6 bg-gray-200 pb-10'>
                            <Link href="#"><img className='w-8 h-8' src="assets/whatsapp.svg" alt="" /></Link>
                            <Link href="#"><img className='w-8 h-8' src="assets/facebook.svg" alt="" /></Link>
                            <Link href="#"><img className='w-8 h-8' src="assets/linkedin.svg" alt="" /></Link>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Example