import React, {useState,  useRef} from 'react';
import './HomeConcept.css'
import MainButton from '../../../../ui/buttons/MainButton/MainButton'
import video1 from '../../video/video.mp4'
import video2 from '../../video/video2.mp4'
import video3 from '../../video/video3.mp4'
import photo from '../../../../images/video.png'
import photo2 from '../../../../images/video1.png'
import photo3 from '../../../../images/video2.png'
import play from '../../../../images/play.png'

const HomeConcept = () => {
    const [videos, setVideos] = useState<any>([
        video1, video2, video3
    ])
    const [index, setIndex] = useState<number>(0)
    const [slider, setSlider] = useState<number>(570)
    const videoPlayer = useRef<HTMLVideoElement>(null!) 

    
    return (
        <section className='home-concept'>
            <div className="home-concept__wrapper">
                <video ref={videoPlayer} autoPlay={true} loop={true} muted={true}>
                    <source src={videos[index]} type='video/mp4'/>
                </video>
                <div className="container">
                    <div className="home-concept__content">
                        <div className="home-concept__content_tagline">
                            <h2>
                                <p className='travel'>ПУТЕШЕСТВУЙ</p>
                                <p className='together'>вместе с</p>
                                <p className='name'>PERO TRAVEL</p>
                            </h2>
                            <MainButton to='/catalog'>К экскурсия</MainButton>
                        </div>
                        <div className="home-concept__content_media">
                            <a href="/">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.8901 22C27.7066 20.137 26.3216 18.4099 24.7601 16.85C24.7316 16.8145 24.7162 16.7704 24.7162 16.725C24.7162 16.6796 24.7316 16.6355 24.7601 16.6C26.1037 14.766 27.2912 12.8225 28.3101 10.79C28.4574 10.4992 28.5275 10.1753 28.5135 9.84953C28.4995 9.52378 28.4019 9.20711 28.2301 8.93C28.0733 8.64835 27.8443 8.41365 27.5665 8.25015C27.2887 8.08666 26.9724 8.0003 26.6501 8H23.65C23.2694 8.00738 22.8987 8.12329 22.5816 8.33409C22.2645 8.54489 22.0142 8.84183 21.8601 9.19C20.9887 11.1172 19.9444 12.9614 18.7401 14.7V9.8C18.7414 9.56325 18.6957 9.32859 18.6057 9.1096C18.5157 8.89062 18.3832 8.69166 18.2158 8.52425C18.0484 8.35684 17.8494 8.2243 17.6304 8.13431C17.4115 8.04432 17.1768 7.99867 16.9401 8H12.5601C12.3051 8.00396 12.056 8.0775 11.8398 8.21266C11.6235 8.34783 11.4483 8.53949 11.333 8.76696C11.2177 8.99443 11.1668 9.24906 11.1856 9.50338C11.2045 9.75769 11.2925 10.002 11.44 10.21L11.84 10.77C12.0546 11.0781 12.1698 11.4445 12.17 11.82V15.66C10.85 13.7071 9.80045 11.5845 9.05005 9.35C8.91473 8.95624 8.6599 8.61453 8.3211 8.37253C7.98229 8.13053 7.57641 8.00029 7.16005 8H4.71005C4.44973 8.00311 4.19347 8.06493 3.96037 8.18086C3.72727 8.29678 3.52334 8.46382 3.36378 8.66953C3.20421 8.87523 3.09313 9.11429 3.03881 9.3689C2.98449 9.6235 2.98833 9.88708 3.05005 10.14C4.40005 15.87 7.23005 20.62 10.82 23.14C11.0352 23.2928 11.3021 23.3544 11.5624 23.3114C11.8228 23.2683 12.0556 23.124 12.21 22.91C12.2873 22.8031 12.3426 22.682 12.3729 22.5537C12.4031 22.4253 12.4077 22.2923 12.3863 22.1621C12.3649 22.032 12.318 21.9074 12.2483 21.7955C12.1786 21.6836 12.0874 21.5865 11.98 21.51C8.84005 19.31 6.34005 15.12 5.07005 10H7.17005C8.09028 12.7959 9.47647 15.4161 11.2701 17.75C11.4773 18.0149 11.7628 18.2077 12.086 18.301C12.4091 18.3944 12.7534 18.3835 13.07 18.27C13.3949 18.1567 13.6759 17.9442 13.8733 17.6625C14.0707 17.3807 14.1745 17.044 14.1701 16.7V11.82C14.1722 11.1843 14.014 10.5583 13.71 10H16.71V15.43C16.7065 15.8185 16.8308 16.1975 17.064 16.5083C17.2971 16.8191 17.6261 17.0446 18.0001 17.15C18.3629 17.2708 18.7554 17.2686 19.117 17.1439C19.4785 17.0192 19.7888 16.7788 20 16.46C21.4204 14.4336 22.6332 12.2694 23.6201 10H26.4201C25.4669 11.8741 24.3668 13.6697 23.13 15.37C22.8182 15.7872 22.6668 16.3026 22.7035 16.8222C22.7402 17.3418 22.9626 17.8308 23.3301 18.2C24.7886 19.6697 26.1014 21.2772 27.2501 23H23.9C22.8666 21.2893 21.4788 19.8197 19.83 18.69C19.5827 18.5087 19.2894 18.4005 18.9836 18.3775C18.6778 18.3545 18.3717 18.4178 18.1001 18.56C17.8207 18.703 17.5867 18.9209 17.4242 19.1893C17.2617 19.4578 17.1772 19.7662 17.1801 20.08V22.46C17.1855 22.5989 17.1362 22.7345 17.0426 22.8373C16.9491 22.9402 16.8189 23.0022 16.6801 23.01H15.82C15.5548 23.01 15.3005 23.1154 15.1129 23.3029C14.9254 23.4904 14.82 23.7448 14.82 24.01C14.82 24.2752 14.9254 24.5296 15.1129 24.7171C15.3005 24.9046 15.5548 25.01 15.82 25.01H16.6801C17.0118 25.0074 17.3398 24.9393 17.6452 24.8096C17.9506 24.6799 18.2274 24.4912 18.4597 24.2543C18.692 24.0173 18.8752 23.7369 18.9988 23.429C19.1224 23.1211 19.184 22.7918 19.18 22.46V20.69C20.383 21.5948 21.4013 22.7218 22.1801 24.01C22.352 24.3079 22.5978 24.5565 22.8939 24.7317C23.1899 24.9069 23.5261 25.0027 23.8701 25.01H27.2501C27.5957 25.0109 27.9351 24.9184 28.2326 24.7424C28.53 24.5664 28.7744 24.3134 28.9401 24.01C29.1099 23.7004 29.1948 23.3513 29.186 22.9983C29.1772 22.6452 29.0751 22.3008 28.8901 22Z"  />
                                </svg>
                            </a>
                            <a href="/">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.9971 2.34668C12.289 2.34668 11.8241 2.3624 10.3678 2.42884C8.91457 2.49518 7.92207 2.72595 7.05356 3.06349C6.15574 3.41241 5.39433 3.87926 4.6353 4.63828C3.87627 5.39731 3.40942 6.15872 3.0605 7.05654C2.72297 7.92499 2.4922 8.9175 2.42586 10.3707C2.35941 11.827 2.34375 12.292 2.34375 16C2.34375 19.708 2.35941 20.1729 2.42586 21.6292C2.4922 23.0824 2.72297 24.0749 3.0605 24.9434C3.40942 25.8412 3.87627 26.6026 4.6353 27.3617C5.39433 28.1207 6.15574 28.5876 7.05356 28.9365C7.92207 29.274 8.91457 29.5048 10.3678 29.5711C11.8241 29.6375 12.289 29.6533 15.9971 29.6533C19.705 29.6533 20.17 29.6375 21.6263 29.5711C23.0795 29.5048 24.072 29.274 24.9405 28.9365C25.8383 28.5876 26.5997 28.1207 27.3588 27.3617C28.1178 26.6026 28.5847 25.8412 28.9336 24.9434C29.2711 24.0749 29.5019 23.0824 29.5682 21.6292C29.6346 20.1729 29.6503 19.708 29.6503 16C29.6503 12.292 29.6346 11.827 29.5682 10.3707C29.5019 8.9175 29.2711 7.92499 28.9336 7.05654C28.5847 6.15872 28.1178 5.39731 27.3588 4.63828C26.5997 3.87926 25.8383 3.41241 24.9405 3.06349C24.072 2.72595 23.0795 2.49518 21.6263 2.42884C20.17 2.3624 19.705 2.34668 15.9971 2.34668ZM15.9971 4.80678C19.6426 4.80678 20.0745 4.82066 21.5141 4.88634C22.8453 4.9471 23.5682 5.16952 24.0494 5.35645C24.6867 5.60412 25.1415 5.90004 25.6192 6.37778C26.097 6.85553 26.3929 7.3104 26.6406 7.94765C26.8275 8.42875 27.05 9.15169 27.1107 10.4829C27.1763 11.9226 27.1903 12.3544 27.1903 16C27.1903 19.6455 27.1763 20.0774 27.1107 21.5171C27.05 22.8482 26.8275 23.5712 26.6406 24.0523C26.3929 24.6896 26.097 25.1444 25.6192 25.6222C25.1415 26.0999 24.6867 26.3958 24.0494 26.6435C23.5682 26.8305 22.8453 27.0529 21.5141 27.1136C20.0747 27.1793 19.6429 27.1932 15.9971 27.1932C12.3512 27.1932 11.9195 27.1793 10.4799 27.1136C9.14876 27.0529 8.42582 26.8305 7.94472 26.6435C7.30742 26.3958 6.8526 26.0999 6.3748 25.6222C5.89706 25.1444 5.60114 24.6896 5.35352 24.0523C5.16654 23.5712 4.94411 22.8482 4.88336 21.5171C4.81767 20.0774 4.8038 19.6455 4.8038 16C4.8038 12.3544 4.81767 11.9226 4.88336 10.4829C4.94411 9.15169 5.16654 8.42875 5.35352 7.94765C5.60114 7.3104 5.89706 6.85553 6.3748 6.37778C6.8526 5.90004 7.30742 5.60412 7.94472 5.35645C8.42582 5.16952 9.14876 4.9471 10.4799 4.88634C11.9196 4.82066 12.3515 4.80678 15.9971 4.80678Z" />
                                    <path d="M15.9955 20.551C13.482 20.551 11.4444 18.5134 11.4444 15.9999C11.4444 13.4864 13.482 11.4488 15.9955 11.4488C18.509 11.4488 20.5466 13.4864 20.5466 15.9999C20.5466 18.5134 18.509 20.551 15.9955 20.551ZM15.9955 8.98877C12.1233 8.98877 8.98438 12.1277 8.98438 15.9999C8.98438 19.8721 12.1233 23.0111 15.9955 23.0111C19.8677 23.0111 23.0067 19.8721 23.0067 15.9999C23.0067 12.1277 19.8677 8.98877 15.9955 8.98877Z" />
                                    <path d="M24.9252 8.71186C24.9252 9.61673 24.1917 10.3502 23.2868 10.3502C22.382 10.3502 21.6484 9.61673 21.6484 8.71186C21.6484 7.80699 22.382 7.07349 23.2868 7.07349C24.1917 7.07349 24.9252 7.80699 24.9252 8.71186Z" />
                                </svg>
                            </a>
                            <a href="/">
                                <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.27646 2.52773C5.27695 1.16903 6.92908 0.2258 9.39731 0.2258H9.40121L13.1337 0.240375C13.7946 0.242955 14.329 0.779455 14.329 1.44037V5.42158C14.329 6.07702 13.8001 6.62158 13.1301 6.62158H10.4742C10.438 6.62158 10.406 6.62643 10.3835 6.63302C10.3811 6.63374 10.3789 6.63444 10.3769 6.63509C10.3684 6.65687 10.3486 6.72109 10.3486 6.8503V8.50354H13.1725C13.8837 8.50354 14.4388 9.11854 14.3663 9.82599L13.9443 13.9398C13.8815 14.5519 13.3659 15.0173 12.7505 15.0173H10.3486V26.5922C10.3486 27.2705 9.79571 27.7898 9.14863 27.7898H4.2395C3.5934 27.7898 3.0395 27.2716 3.0395 26.5923V15.0173H1.71538C1.05264 15.0173 0.515381 14.4801 0.515381 13.8173V9.70354C0.515381 9.0408 1.05264 8.50354 1.71538 8.50354H3.0395V6.5836C3.0395 5.40822 3.31426 3.83442 4.27646 2.52773ZM5.88693 3.71363C5.26137 4.56316 5.0395 5.66826 5.0395 6.5836V10.5035H2.51538V13.0173H5.0395V25.7898H8.34863V13.0173H12.0284L12.2863 10.5035H8.34863V6.8503C8.34863 6.11163 8.60594 5.49556 9.10378 5.08829C9.56358 4.71214 10.0987 4.62158 10.4742 4.62158H12.329V2.23725L9.39731 2.2258C9.39668 2.2258 9.39605 2.2258 9.39542 2.2258C7.5003 2.22626 6.474 2.91637 5.88693 3.71363Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-concept__changer" style={{transform: `translateX(${slider}px)`}}>
                <div className="home-concept__changer_item play">
                    <img 
                        src={photo} 
                        alt=""
                        onClick={() => {
                            if(!(index === 0)) {
                                if (slider === 570) {
                                    setSlider(slider - 210)
                                }else {
                                    setSlider(570)
                                }
                                setIndex(0)
                                videoPlayer.current.load()
                            }
                        }} 
                    />
                    {index === 0
                        ?
                        <img src={play} className='play' alt="" />
                        :
                        <></>
                    }
                </div>
                <div className="home-concept__changer_item">
                    <img 
                        src={photo2} 
                        alt=""
                        onClick={() => {
                            if (!(index === 1)) {
                                if (slider ===  360) {
                                    setSlider(slider - 360)
                                } else if(slider ===  570) {
                                    setSlider(slider - 570)
                                }else {
                                    setSlider(570)
                                }
                                setIndex(1)
                                videoPlayer.current.load()
                            }
                        }} 
                    />
                    {index === 1
                        ?
                        <img src={play} className='play' alt="" />
                        :
                        <></>
                    }
                </div>
                <div className="home-concept__changer_item">
                    <img 
                        src={photo3} 
                        alt=""
                        onClick={() => {
                            if (!(index === 2)) {
                                setIndex(2)
                                videoPlayer.current.load()
                            }
                        }} 
                    />
                    {index === 2
                        ?
                        <img src={play} className='play' alt="" />
                        :
                        <></>
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeConcept;