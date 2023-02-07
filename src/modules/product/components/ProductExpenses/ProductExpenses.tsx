import React, {useState} from 'react';
import './ProductExpenses.css'
import SecondInput from '../../../../ui/input/SecondInput/SecondInput';
import SecondButton from '../../../../ui/buttons/SecondButton/SecondButton';
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import bg from '../../../../images/expenses.png'
import MainButton from '../../../../ui/buttons/MainButton/MainButton';
import LikeButton from '../../../../ui/buttons/LikeButton/LikeButton';

const ProductExpenses = () => {
    const [city, setCity] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [group, setGroup] = useState<string>('')

    return (
        <section className='product-expenses'>
            <div className="product-expenses__background">
                <img src={bg} alt="" />
            </div>
            <div className="product-expenses__form">
                <HeadingTwo>Забронировать тур</HeadingTwo>
                <div className="product-expenses__form_input">
                    <SecondInput 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        id='city' 
                        type='text' 
                        placeholder='Город'
                    />
                    <SecondInput 
                        value={date} 
                        onChange={e => setDate(e.target.value)}
                        id='date' 
                        type='date' 
                        placeholder='Дата'
                    />
                    <SecondInput 
                        value={group} 
                        onChange={e => setGroup(e.target.value + ' человек')}
                        id='group' 
                        type='text' 
                        placeholder='Группа'
                    /> 
                </div>
                <div className="product-expenses__form_btn">
                    <MainButton to='/product'>Забронировать</MainButton>
                    <LikeButton />
                </div>
            </div>
        </section>
    );
};

export default ProductExpenses;