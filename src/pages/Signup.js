import { useCallback } from 'react';
import 'antd/dist/antd.min.css';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';



const Signup = () => {
    const navigate = useNavigate();

    const onButtonClick = useCallback(() => {
        navigate('/login');
    }, [navigate]);

    return (
        <div className={styles.signup}>
            <div className={styles.navbar}>
                <div className={styles.frameParent}>
                    <div className={styles.frameWrapper}>
                        <div className={styles.iconlylightsearchParent}>
                            <img
                                className={styles.iconlylightsearch}
                                alt=""
                                src="../iconlylightsearch.svg"
                            />
                            <div className={styles.searchItemHere}>Search Item Here</div>
                        </div>
                    </div>
                    <div className={styles.menuParent}>
                        <div className={styles.menu}>
                            <div className={styles.menu1}>Explore</div>
                        </div>
                        <div className={styles.menu2}>
                            <div className={styles.menu3}>My Items</div>
                        </div>
                        <div className={styles.menu4}>
                            <div className={styles.menu3}>Following</div>
                        </div>
                    </div>
                    <div className={styles.buttonParent}>
                        <div className={styles.button}>
                            <div className={styles.getTheLastesUpdates}>Create</div>
                        </div>
                        <div className={styles.button2}>
                            <div className={styles.getTheLastesUpdates}>Connect</div>
                        </div>
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
                            <div className={styles.groupChild} />
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
                        <img className={styles.frameChild} alt="" src="../group-14.svg" />
                        <img className={styles.frameChild} alt="" src="../group-15.svg" />
                        <img className={styles.frameChild} alt="" src="../group-16.svg" />
                        <img className={styles.frameChild} alt="" src="../group-13.svg" />
                    </div>
                </div>
            </div>
            <div className={styles.text}>{'        '}</div>
            <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
            <div className={styles.signupChild} />
            <div className={styles.form}>
                <div className={styles.container} />
                <b className={styles.signUp}>Sign up</b>
                <div className={styles.theresNoChargeUponRegistr}>
          There’s no charge upon registration
                </div>
                <input
                    className={styles.fullName}
                    type="text"
                    placeholder="Full Name"
                />
                <div className={styles.email}>
                    <input className={styles.bg} type="email" />
                    <Input
                        className={styles.name}
                        type="email"
                        size="middle"
                        placeholder="Email"
                        bordered={false}
                    />
                </div>
                <div className={styles.password}>
                    <input className={styles.bg} type="text" />
                    <AntInput.Password
                        className={styles.name}
                        size="middle"
                        placeholder="Password"
                        maxLength={12}
                        bordered={false}
                    />
                </div>
                <div className={styles.confirmPassword}>
                    <input className={styles.bg} type="text" />
                    <AntInput.Password
                        className={styles.name}
                        size="middle"
                        placeholder="Confirm Password"
                        bordered={false}
                    />
                </div>
                <a className={styles.login} target="_blank" href="/login">
                    <span>{'Already a member? '}</span>
                    <b className={styles.login1}>Login</b>
                </a>
                <button className={styles.button6} onClick={onButtonClick}>
                    <div className={styles.buttonChild} />
                    <b className={styles.field}>SIGNUP</b>
                </button>
            </div>
        </div>
    );
};

export default Signup;
