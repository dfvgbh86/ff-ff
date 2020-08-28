import React from 'react'
import '../style/index.scss'
import {ProductCard} from './ProductCard'
import {data} from '../assets/utils/data'


const Product = () => {
    return (
        <>
            <div className='title'>
                Ты сегодня покормил кота?
            </div>
            <div className='cards'>

                    {data.map(d => (
                        <ProductCard
                            key={d.id}
                            subDescription={d.sub_description}
                            title={d.title}
                            subTitle={d.sub_title}
                            description={d.description}
                            weight={d.weight}
                            footer={d.footer}
                            disabled={d.disabled}
                        />
                    ))}

            </div>
        </>

    )
}

export {
    Product
}
