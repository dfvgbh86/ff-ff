import React, {useState} from 'react'
import '../style/index.scss'
import cn from 'classnames'


const ProductCard = ({subDescription, disabled, footer, weight,description,subTitle,title}) => {

    // Храним состояние наведения и выбора карточки

    const [isSelected, setSelect] = useState(false)
    const [isHover, setHover] = useState(false)

    // Функция выбора карточки

    const handleClick = () => {
        if (!disabled)
            setSelect(!isSelected)
    }

    // Функции наведения на карточку

    const mouseOut = () => setHover(false)
    const mouseOver = () => setHover(true)

    // Функция отрисовки контента под карточкой

    const footerText = () => {
        if (!disabled && !isSelected) {
            return footer.default.text
        } else if (!disabled && isSelected) {
            return footer.selected
        } else if (disabled) {
            return footer.disabled
        }
    }

    // Функции отвечающие за добавление/удаление css классов в зависимости от состояния выбора/наведения

    const card = cn('card', {'card-selected': isSelected && !isHover},
        {'card-hover': isHover && !isSelected},
        {'card-selected__hover': isHover & isSelected},
        {'card-disabled': disabled})

    const card__subdescription = cn('card__subdescription',
        {'card__subdescription-selected__hover': isSelected && !isHover},
        {'card__subdescription-disabled': disabled})

    const card__title = cn('card__title', {'card__title-disabled': disabled})
    const card__subtitle = cn('card__subtitle', {'card__subtitle-disabled': disabled})
    const card__description = cn('card__description', {'card__description-disabled': disabled})

    const ellipse = cn('ellipse', {'ellipse-selected': isSelected && !isHover},
        {'ellipse-hover': isHover && !isSelected},
        {'ellipse-selected__hover': isHover & isSelected},
        {'ellipse-disabled': disabled})

    const cards__buy = cn('cards__buy', {'cards__buy': isSelected})
    const cards__dot = cn('cards__dot', {'cards__dot': isSelected})

    const card__wrapper = cn('card__wrapper', {'card__wrapper-disabled': disabled}  )
    const cards__footer = cn('cards__footer', {'cards__footer-disabled': disabled}  )

    return (
        <>
            <div className='cards__wrapper'>
                <div className={card__wrapper}>
                    <div className={card}
                         onClick={handleClick}
                         onMouseOut={mouseOut}
                         onMouseOver={mouseOver}>
                        <div className='card__content'>
                            <div className={card__subdescription}>
                                {isSelected && !isHover ? subDescription.selected_hover : subDescription.default}
                            </div>
                            <div className={card__title}>
                                {title}
                            </div>
                            <div className={card__subtitle}>
                                {subTitle}
                            </div>
                            <div className={card__description}>
                                    <span className='card__numbers'>
                                        {description.count}
                                    </span> порций {description.items.count} {description.items.name} в подарок
                                    <br/> {description.items.bonus}
                            </div>

                        </div>
                        <div className={ellipse}>
                            <div className='ellipse__weight'>
                                {weight}
                            </div>
                            <span className='ellipse__em'>
                                        кг
                                    </span>
                        </div>
                    </div>

                </div>
                <div className={cards__footer}>
                    {footerText()}
                    <span className={cards__buy}
                            onClick={handleClick}>
                    {!isSelected && !disabled ? footer.default.buy : '' ? disabled : ''}
                </span>
                    <span className={cards__dot}>
                    {!isSelected && !disabled ? footer.default.dot : '' ? disabled : ''}
                </span>
                </div>
            </div>
        </>
    )
}

export {
    ProductCard
}
