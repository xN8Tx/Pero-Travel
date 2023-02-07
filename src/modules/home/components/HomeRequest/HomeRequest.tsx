import React, {useState} from 'react';
import './HomeRequest.css'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import TextBig from '../../../../ui/text/text14/TextBig';
import MainInput from '../../../../ui/input/MainInput/MainInput';
import MainButton from '../../../../ui/buttons/MainButton/MainButton';


const HomeRequest = () => {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    return (
        <section className='home-request'>
            <div className="container">
                <div className="home-request__modal">
                    <div className="home-request__modal_headings">
                        <HeadingTwo>Остались вопросы?</HeadingTwo>
                        <TextBig>Оставь заявку и мы ответим</TextBig>
                    </div>
                    <div className='home-request__modal_form'>
                        <MainInput 
                            value={name}
                            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
                            placeholder={'Имя'}
                        />
                        <MainInput 
                            value={phone}
                            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} 
                            placeholder={'Телефон'}
                        />
                        <MainInput 
                            value={email}
                            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                            placeholder={'Почта'}
                        />
                    </div>
                    <div className="home-request__modal_btn">
                        <MainButton>Оставить заявку</MainButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeRequest;