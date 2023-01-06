import { useCallback, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import styles from "./Home.module.css";

const Home = () => {
  const onButton1Click = useCallback(() => {
    window.open("/login");
  }, []);

  const onButton3Click = useCallback(() => {
    window.open("/loadmore");
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
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
    <div className={styles.home}>
      <div className={styles.navbarParent}>
        <div className={styles.navbar}>
          <img className={styles.image1Icon} alt="" src="../image-12@2x.png" />
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <input className={styles.frameChild} type="text" />
            </div>
            <div className={styles.menuParent}>
              <a className={styles.menu}>
                <div className={styles.menu1}>Explore</div>
              </a>
              <div className={styles.menu2}>
                <a className={styles.menu3}>My Items</a>
              </div>
              <div className={styles.menu4}>
                <a className={styles.menu3}>Following</a>
              </div>
              <div className={styles.menu4}>
                <a className={styles.menu3}>Community</a>
              </div>
            </div>
            <button className={styles.group}>
              <img className={styles.oval63Icon} alt="" src="../oval-63.svg" />
              <img
                className={styles.path418Icon}
                alt=""
                src="../path4-18.svg"
              />
              <img
                className={styles.path4Copy4Icon}
                alt=""
                src="../path4copy-4.svg"
              />
              <img
                className={styles.path4Copy24Icon}
                alt=""
                src="../path4copy2-4.svg"
              />
            </button>
            <div className={styles.buttonParent}>
              <button className={styles.button}>
                <div className={styles.button1}>Create</div>
              </button>
              <button
                className={styles.button2}
                autoFocus
                onClick={onButton1Click}
              >
                <div className={styles.button3}>SignUp/Login</div>
              </button>
            </div>
          </div>
        </div>
        <img className={styles.frameItem} alt="" src="../vector-12.svg" />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.bannerIcon} alt="" src="../banner.svg" />
          <div className={styles.discoverCollectAndSellEx}>
            Discover, collect, and sell extraordinary NFTs, Currencies and
            GiftCards
          </div>
        </div>
        <div className={styles.topSellersParent}>
          <div className={styles.topSellers}>Top Sellers</div>
          <div className={styles.groupParent}>
            <div className={styles.cardsellerslargedarkParent}>
              <div className={styles.cardsellerslargedark}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="../ellipse-7.svg"
                  />
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.check1Wrapper}>
                  <div className={styles.check1} />
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="../group-27@2x.png"
                  />
                  <div className={styles.topSellers}>Yashswi SIngh</div>
                  <div className={styles.parent}>
                    <div className={styles.div1}>5.250</div>
                    <div className={styles.eth}>ETH</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardsellerslargedark1}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="../ellipse-7.svg"
                  />
                  <div className={styles.div}>2</div>
                </div>
                <div className={styles.check1Wrapper}>
                  <div className={styles.check1} />
                </div>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="../group-271@2x.png"
                  />
                  <div className={styles.topSellers}>Rohan Nanda</div>
                  <div className={styles.container}>
                    <div className={styles.div1}>4.932</div>
                    <div className={styles.eth1}>ETH</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardsellerslargedark2}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="../ellipse-7.svg"
                  />
                  <div className={styles.div}>3</div>
                </div>
                <div className={styles.check1Wrapper}>
                  <div className={styles.check1} />
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="../group-272@2x.png"
                  />
                  <div className={styles.topSellers}>David Sharma</div>
                  <div className={styles.parent}>
                    <div className={styles.div1}>4.620</div>
                    <div className={styles.eth}>ETH</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardsellerslargedark3}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="../ellipse-7.svg"
                  />
                  <div className={styles.div}>4</div>
                </div>
                <div className={styles.check1Wrapper}>
                  <div className={styles.check1} />
                </div>
                <div className={styles.groupParent2}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="../group-273@2x.png"
                  />
                  <div className={styles.topSellers}>Vishu_24</div>
                  <div className={styles.parent1}>
                    <div className={styles.div1}>4.125</div>
                    <div className={styles.eth3}>ETH</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardsellerslargedark4}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="../ellipse-7.svg"
                  />
                  <div className={styles.div}>5</div>
                </div>
                <div className={styles.check1Wrapper}>
                  <div className={styles.check1} />
                </div>
                <div className={styles.groupParent3}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="../group-274@2x.png"
                  />
                  <div className={styles.topSellers}>Budhiman</div>
                  <div className={styles.parent2}>
                    <div className={styles.div1}>3.921</div>
                    <div className={styles.eth4}>ETH</div>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.iconlylightarrowRightCir}>
              <img
                className={styles.groupItem}
                alt=""
                src="../iconlylightarrow--right-circle.svg"
              />
            </button>
            <div className={styles.iconlylightarrowLeftCirc}>
              <button className={styles.iconlylightarrowLeftCirc1}>
                <img
                  className={styles.arrowLeftCircle}
                  alt=""
                  src="../arrow--left-circle.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.topSellersParent}>
          <div className={styles.topSellers}>Hot Bids</div>
          <div className={styles.frameGroup}>
            <div className={styles.cardnftCardlargedarkParent}>
              <div className={styles.cardnftCardlargedark}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="../mask-group@2x.png"
                  />
                  <div className={styles.nftNameParent}>
                    <div className={styles.topSellers}>Let’s Celebrate!</div>
                    <div className={styles.groupParent4}>
                      <div className={styles.parent3}>
                        <div className={styles.div10}>{"0.88 "}</div>
                        <div className={styles.eth5}>ETH</div>
                      </div>
                      <div className={styles.groupWrapper}>
                        <div className={styles.frameContainer}>
                          <div className={styles.iconheartactiveParent}>
                            <img
                              className={styles.iconheartactive}
                              alt=""
                              src="../iconheartactive.svg"
                            />
                            <div className={styles.div11}>92</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardnftCardlargedark}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="../mask-group1@2x.png"
                  />
                  <div className={styles.nftNameParent}>
                    <div className={styles.topSellers}>The Bright World</div>
                    <div className={styles.groupParent4}>
                      <div className={styles.parent3}>
                        <div className={styles.div10}>{"0.64 "}</div>
                        <div className={styles.eth5}>ETH</div>
                      </div>
                      <div className={styles.groupWrapper}>
                        <div className={styles.frameContainer}>
                          <div className={styles.iconheartactiveParent}>
                            <img
                              className={styles.iconheartactive}
                              alt=""
                              src="../iconheartinactive.svg"
                            />
                            <div className={styles.div11}>25</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardnftCardlargedark}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="../mask-group2@2x.png"
                  />
                  <div className={styles.nftNameParent}>
                    <div className={styles.topSellers}>Take me Up</div>
                    <div className={styles.groupParent4}>
                      <div className={styles.parent5}>
                        <div className={styles.div10}>{"0.74 "}</div>
                        <div className={styles.eth7}>ETH</div>
                      </div>
                      <div className={styles.groupWrapper1}>
                        <div className={styles.frameWrapper2}>
                          <div className={styles.iconheartactiveParent}>
                            <img
                              className={styles.iconheartactive}
                              alt=""
                              src="../iconheartactive1.svg"
                            />
                            <div className={styles.div11}>55</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardnftCardlargedark}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="../mask-group3@2x.png"
                  />
                  <div className={styles.nftNameParent}>
                    <div className={styles.topSellers}>The World Winner</div>
                    <div className={styles.groupParent7}>
                      <div className={styles.parent6}>
                        <div className={styles.div10}>{"1.09 "}</div>
                        <div className={styles.eth8}>ETH</div>
                      </div>
                      <div className={styles.groupWrapper2}>
                        <div className={styles.frameContainer}>
                          <div className={styles.iconheartactiveParent}>
                            <img
                              className={styles.iconheartactive}
                              alt=""
                              src="../iconheartactive2.svg"
                            />
                            <div className={styles.div11}>82</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardnftCardlargedarkParent}>
              <div className={styles.cardnftCardlargedark}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="../mask-group4@2x.png"
                  />
                  <div className={styles.nftNameParent}>
                    <div className={styles.topSellers}>Illumination</div>
                    <div className={styles.groupParent8}>
                      <div className={styles.parent3}>
                        <div className={styles.div10}>{"0.84 "}</div>
                        <div className={styles.eth5}>ETH</div>
                      </div>
                      <div className={styles.groupWrapper3}>
                        <div className={styles.frameWrapper4}>
                          <div className={styles.iconheartactiveParent}>
                            <img
                              className={styles.iconheartactive}
                              alt=""
                              src="../iconheartinactive1.svg"
                            />
                            <div className={styles.div11}>22</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardnftCardlargedark}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="../mask-group5@2x.png"
                  />
                  <div className={styles.nftNameParent}>
                    <div className={styles.topSellers}>Freedom</div>
                    <div className={styles.groupParent7}>
                      <div className={styles.parent3}>
                        <div className={styles.div10}>{"0.84 "}</div>
                        <div className={styles.eth5}>ETH</div>
                      </div>
                      <div className={styles.groupWrapper4}>
                        <div className={styles.frameWrapper5}>
                          <div className={styles.iconheartactiveParent}>
                            <img
                              className={styles.iconheartactive}
                              alt=""
                              src="../iconheartactive3.svg"
                            />
                            <div className={styles.div11}>71</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardnftCardlargedark}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="../mask-group6@2x.png"
                  />
                  <div className={styles.nftNameParent}>
                    <div className={styles.topSellers}>The Tourist</div>
                    <div className={styles.groupParent8}>
                      <div className={styles.parent5}>
                        <div className={styles.div10}>{"0.78 "}</div>
                        <div className={styles.eth7}>ETH</div>
                      </div>
                      <div className={styles.groupWrapper5}>
                        <div className={styles.frameContainer}>
                          <div className={styles.iconheartactiveParent}>
                            <img
                              className={styles.iconheartactive}
                              alt=""
                              src="../iconheartactive4.svg"
                            />
                            <div className={styles.div11}>63</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardnftCardlargedark}>
                <div className={styles.cardsellerslargedarkChild} />
                <div className={styles.maskGroupParent}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="../mask-group7@2x.png"
                  />
                  <div className={styles.nftNameParent}>
                    <div className={styles.topSellers}>Unfold Your wings</div>
                    <div className={styles.groupParent11}>
                      <div className={styles.parent3}>
                        <div className={styles.div10}>{"0.84 "}</div>
                        <div className={styles.eth5}>ETH</div>
                      </div>
                      <div className={styles.groupWrapper6}>
                        <div className={styles.frameWrapper2}>
                          <div className={styles.iconheartactiveParent}>
                            <img
                              className={styles.iconheartactive}
                              alt=""
                              src="../iconheartactive5.svg"
                            />
                            <div className={styles.div11}>66</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button4} autoFocus onClick={onButton3Click}>
          <div className={styles.button3}>Load More</div>
        </button>
        <div className={styles.frameChild4} />
        <button className={styles.button4}>
          <div className={styles.button3}>Load More</div>
        </button>
        <div className={styles.footer}>
          <img className={styles.frameItem} alt="" src="../vector-12.svg" />
          <div className={styles.col1Parent}>
            <div className={styles.col1}>
              <div className={styles.topSellers}>Get the lastes Updates</div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="../rectangle-13.svg"
                />
                <Input
                  className={styles.yourEmail}
                  type="email"
                  size="middle"
                  placeholder="Your Email"
                  bordered={false}
                />
                <button className={styles.button8} autoFocus>
                  <div className={styles.button1}>Email Me!</div>
                </button>
              </div>
            </div>
            <div className={styles.col2}>
              <div className={styles.brandGlobal}>Brand Global</div>
              <div className={styles.listItems}>
                <div className={styles.vision}>Vision</div>
                <div className={styles.vision}>{"Mission "}</div>
                <div className={styles.vision}>Value Proposition</div>
                <div className={styles.vision}>Team</div>
              </div>
            </div>
            <div className={styles.listItems1}>
              <div className={styles.vision}>Investors</div>
              <div className={styles.vision}>Careers</div>
              <div className={styles.vision}>Media</div>
              <div className={styles.vision}>Contact Us</div>
            </div>
            <div className={styles.col3}>
              <div className={styles.support}>Support</div>
              <div className={styles.listItems}>
                <div className={styles.vision}>Help center</div>
                <div className={styles.vision}>Terms of service</div>
                <div className={styles.vision}>Legal</div>
                <div className={styles.vision}>Privacy policy</div>
              </div>
            </div>
          </div>
          <img className={styles.frameItem} alt="" src="../vector-12.svg" />
          <div className={styles.theBrandGlobalIncAllRigParent}>
            <div className={styles.topSellers}>
              The Brand Global, Inc. All Rights Reserved
            </div>
            <button className={styles.frameButton} data-animate-on-scroll>
              <img
                className={styles.frameChild5}
                alt=""
                src="../group-142.svg"
              />
              <img
                className={styles.frameChild5}
                alt=""
                src="../group-152.svg"
              />
              <img
                className={styles.frameChild5}
                alt=""
                src="../group-162.svg"
              />
              <img
                className={styles.frameChild5}
                alt=""
                src="../group-132.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.modal}>
        <div className={styles.modalChild} />
        <div className={styles.chooseYourPreferredCardTyp}>
          Choose your preferred card type to continue the exchange process
        </div>
        <div className={styles.amazon}>
          <div className={styles.amazonChild} />
          <div className={styles.amazon1}>Amazon</div>
          <img className={styles.amazonItem} alt="" src="../group-3.svg" />
          <img className={styles.amazonInner} alt="" src="../group-22.svg" />
        </div>
        <img className={styles.itunesIcon} alt="" src="../itunes.svg" />
        <img className={styles.steamIcon} alt="" src="../steam.svg" />
        <img
          className={styles.googlePlayIcon}
          alt=""
          src="../google-play.svg"
        />
        <img className={styles.othersIcon} alt="" src="../others.svg" />
      </div>
      <div className={styles.gotGiftCarsForSale}>Got Gift Cars for sale ?</div>
    </div>
  );
};

export default Home;
