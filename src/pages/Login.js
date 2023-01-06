import { useCallback, useEffect } from 'react';
import 'antd/dist/antd.min.css';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
    const navigate = useNavigate();

    const onButton2Click = useCallback(() => {
        navigate('/');
    }, [navigate]);

    useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
            '[data-animate-on-scroll]'
        );
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        const targetElement = entry.target;
                        targetElement.classList.add(styles.animate);
                        observer.unobserve(targetElement);
                    }
                }
            },
            {
                threshold: 0.15,
            }
        );

        for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.observe(scrollAnimElements[i]);
        }

        return () => {
            for (let i = 0; i < scrollAnimElements.length; i++) {
                observer.unobserve(scrollAnimElements[i]);
            }
        };
    }, []);

    return (
        <div className={styles.login}>
            <div className={styles.navbar}>
                <div className={styles.frameParent}>
                    <div className={styles.frameWrapper}>
                        <input className={styles.frameChild} type="text" />
                    </div>
                    <div className={styles.menuParent}>
                        <div className={styles.menu}>
                            <button className={styles.menu1}>Explore</button>
                        </div>
                        <div className={styles.menu2}>
                            <div className={styles.menu3}>My Items</div>
                        </div>
                        <div className={styles.menu4}>
                            <div className={styles.menu3}>Following</div>
                        </div>
                    </div>
                    <div className={styles.buttonParent}>
                        <button className={styles.button}>
                            <div className={styles.button1}>Create</div>
                        </button>
                        <button className={styles.button2}>
                            <div className={styles.button3}>Connect</div>
                        </button>
                    </div>
                </div>
                <img className={styles.navbarChild} alt="" src="../vector-1.svg" />
            </div>
            <div className={styles.footer}>
                <img className={styles.navbarChild} alt="" src="../vector-1.svg" />
                <div className={styles.col1Parent}>
                    <div className={styles.col1}>
                        <div className={styles.getTheLastesUpdates}>
              Get the lastes Updates
                        </div>
                        <div className={styles.rectangleParent}>
                            <input className={styles.groupChild} type="text" />
                            <div className={styles.yourEmail}>Your Email</div>
                            <div className={styles.button4}>
                                <div className={styles.getTheLastesUpdates}>Email Me!</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <div className={styles.cryptoket}>CryptoKet</div>
                        <div className={styles.listItems}>
                            <div className={styles.explore}>Explore</div>
                            <div className={styles.explore}>How it Works</div>
                            <div className={styles.explore}>Contact Us</div>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <div className={styles.cryptoket}>Support</div>
                        <div className={styles.listItems}>
                            <div className={styles.explore}>Help center</div>
                            <div className={styles.explore}>Terms of service</div>
                            <div className={styles.explore}>Legal</div>
                            <div className={styles.explore}>Privacy policy</div>
                        </div>
                    </div>
                </div>
                <img className={styles.navbarChild} alt="" src="../vector-1.svg" />
                <div className={styles.theBrandGlobalIncAllRigParent}>
                    <div className={styles.getTheLastesUpdates}>
            The Brand Global, Inc. All Rights Reserved
                    </div>
                    <div className={styles.groupParent}>
                        <img className={styles.frameItem} alt="" src="../group-141.svg" />
                        <img className={styles.frameItem} alt="" src="../group-151.svg" />
                        <img className={styles.frameItem} alt="" src="../group-161.svg" />
                        <img className={styles.frameItem} alt="" src="../group-131.svg" />
                    </div>
                </div>
            </div>
            <div className={styles.text}>{'        '}</div>
            <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
            <div className={styles.loginChild} />
            <form className={styles.rectangleGroup}>
                <div className={styles.groupItem} />
                <b className={styles.welcomeBack}>Welcome back!</b>
            </form>
            <div className={styles.kindlyFillInYourLoginDeta}>
        Kindly fill in your login details to proceed
            </div>
            <form className={styles.bgParent}>
                <div className={styles.bg} />
                <div className={styles.name}>Email</div>
                <div className={styles.bgGroup}>
                    <div className={styles.bg1} />
                    <AntInput.Password
                        className={styles.nameAntinputpassword}
                        size="middle"
                        placeholder="Password"
                        maxLength={10}
                        bordered={false}
                    />
                    <div className={styles.forgotPassword}>i forgot my password?</div>
                    <button
                        className={styles.button6}
                        onClick={onButton2Click}
                        data-animate-on-scroll
                    >
                        <div className={styles.buttonChild} />
                        <b className={styles.field}>LOGIN</b>
                    </button>
                </div>
                <Input
                    className={styles.name1}
                    type="email"
                    size="middle"
                    placeholder="Email"
                    bordered={false}
                />
            </form>
            <a className={styles.signup} target="_blank" href="/signup">
                <span>{'Don’t have an account yet? '}</span>
                <b className={styles.signUp}>Sign Up</b>
            </a>
        </div>
    );
};

export default Login;
