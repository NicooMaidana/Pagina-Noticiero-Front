import React from 'react'

const CardTopRating = () => {
    return (
        <>

            <div className="flex flex-col items-center justify-start w-screen h-screen px-10 pt-5 pb-44 text-gray-700">
                <div className="flex flex-col items-center w-11/12 h-full p-6 pb-6 bg-gray-200 rounded-lg shadow-xl sm:p-8">
                    <h2 className="text-xl font-bold">Rating de TV - Medido en Morteros</h2>
                    <span className="text-sm font-semibold text-gray-500">Datos obtenidos desde las 10:19 hasta las 13:19</span>
                    <div className="flex items-end flex-grow w-full mt-14 space-x-2 sm:space-x-3">
                        <div className="relative flex flex-col items-center flex-grow pb-5 xl:w-72 xl:h-40">
                            <img src="src\assets\img\Publicidades\TopRating_canal13.png" className='w-auto h-auto' />
                            <div className="relative flex justify-center w-full h-20 bg-indigo-400 group hover:bg-indigo-300 transition-all">
                                <span className="absolute text-white text-sm font-bold top-1/2 left-1/2 transform 
                                -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity 
                                cursor-default text-center">El Trece</span>
                            </div>
                            <span className="absolute -bottom-3 text-lg font-bold">1</span>
                        </div>
                        <div className="relative flex flex-col items-center flex-grow pb-5 xl:w-72 xl:h-40">
                            <img src="src\assets\img\Publicidades\TopRating_telefe.png" className='w-auto h-auto' />
                            <div className="relative flex justify-center w-full h-20 bg-indigo-400 group hover:bg-indigo-300 transition-all">
                                <span className="absolute text-white text-sm font-bold top-1/2 left-1/2 transform 
                                -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity 
                                cursor-default text-center">Telefe</span>
                            </div>
                            <span className="absolute -bottom-3 text-lg font-bold">2</span>
                        </div>
                        <div className="relative flex flex-col items-center flex-grow pb-5 xl:w-72 xl:h-40">
                            <img src="src\assets\img\Publicidades\TopRating_c50.png" className='xl:w-16 xl:h-20 lg:w-48 lg:h-20 sm:h-20 w-56' />
                            <div className="relative flex justify-center w-full h-20 bg-indigo-400 group hover:bg-indigo-300 transition-all">
                                <span className="absolute text-white text-sm font-bold top-1/2 left-1/2 transform 
                                -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity 
                                cursor-default text-center">C50 Morteros</span>
                            </div>
                            <span className="absolute -bottom-3 text-lg font-bold">3</span>
                        </div>
                        <div className="relative flex flex-col items-center flex-grow pb-5 xl:w-72 xl:h-40">
                            <img src="src\assets\img\Publicidades\TopRating_tycsports.png" className='w-auto h-auto' />
                            <div className="relative flex justify-center w-full h-20 bg-indigo-400 group hover:bg-indigo-300 transition-all">
                                <span className="absolute text-white text-sm font-bold top-1/2 left-1/2 transform 
                                -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity 
                                cursor-default text-center">TyC Sports</span>
                            </div>
                            <span className="absolute -bottom-3 text-lg font-bold">4</span>
                        </div>
                        <div className="relative flex flex-col items-center flex-grow pb-5 xl:w-72 xl:h-40">
                            <img src="src\assets\img\Publicidades\TopRating_tn.png" className='w-auto h-auto' />
                            <span className="absolute top-0 hidden -mt-6 text-xs font-bold"></span>
                            <div className="relative flex justify-center w-full h-20 bg-indigo-400 group hover:bg-indigo-300 transition-all">
                                <span className="absolute text-white text-sm font-bold top-1/2 left-1/2 transform 
                                -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity 
                                cursor-default text-center">Todo Noticias</span>
                            </div>
                            <span className="absolute -bottom-3 text-lg font-bold">5</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardTopRating