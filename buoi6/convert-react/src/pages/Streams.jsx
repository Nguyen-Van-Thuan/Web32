import { Link } from "react-router-dom"

const Streams = () => {
  return (
    <>
      <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="page-content">

          <div className="row">
            <div className="col-lg-8">
              <div className="featured-games header-text">
                <div className="heading-section">
                  <h4><em>Live</em> Streams</h4>
                </div>
                <div className="owl-features owl-carousel">
                  <div className="item">
                    <div className="thumb">
                      <img src="assets/images/featured-01.jpg" alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>CS-GO<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i className="fa fa-star"></i> 4.8</li>
                      <li><i className="fa fa-download"></i> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src="assets/images/featured-02.jpg" alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Gamezer<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i className="fa fa-star"></i> 4.8</li>
                      <li><i className="fa fa-download"></i> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src="assets/images/featured-03.jpg" alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Island Rusty<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i className="fa fa-star"></i> 4.8</li>
                      <li><i className="fa fa-download"></i> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src="assets/images/featured-01.jpg" alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>CS-GO<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i className="fa fa-star"></i> 4.8</li>
                      <li><i className="fa fa-download"></i> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src="assets/images/featured-02.jpg" alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Gamezer<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i className="fa fa-star"></i> 4.8</li>
                      <li><i className="fa fa-download"></i> 2.3M</li>
                    </ul>
                  </div>
                  <div className="item">
                    <div className="thumb">
                      <img src="assets/images/featured-03.jpg" alt=""/>
                      <div className="hover-effect">
                        <h6>2.4K Streaming</h6>
                      </div>
                    </div>
                    <h4>Island Rusty<br/><span>249K Downloads</span></h4>
                    <ul>
                      <li><i className="fa fa-star"></i> 4.8</li>
                      <li><i className="fa fa-download"></i> 2.3M</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="top-streamers">
                <div className="heading-section">
                  <h4><em>Top</em> Streamers</h4>
                </div>
                <ul>
                  <li>
                    <span>01</span>
                    <img src="assets/images/avatar-01.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", marginRight: "15px"}}/>
                    <h6><i className="fa fa-check"></i> LahutaM</h6>
                    <div className="main-button">
                      <Link to="#">Follow</Link>
                    </div>
                  </li>
                  <li>
                    <span>02</span>
                    <img src="assets/images/avatar-02.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", marginRight: "15px"}}/>
                    <h6><i className="fa fa-check"></i> Kengan</h6>
                    <div className="main-button">
                      <Link to="#">Follow</Link>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <img src="assets/images/avatar-03.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", marginRight: "15px"}}/>
                    <h6><i className="fa fa-check"></i> Areluwa</h6>
                    <div className="main-button">
                      <Link to="#">Follow</Link>
                    </div>
                  </li>
                  <li>
                    <span>04</span>
                    <img src="assets/images/avatar-04.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", marginRight: "15px"}}/>
                    <h6><i className="fa fa-check"></i> Omeg</h6>
                    <div className="main-button">
                      <Link to="#">Follow</Link>
                    </div>
                  </li>
                  <li>
                    <span>05</span>
                    <img src="assets/images/avatar-01.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", marginRight: "15px"}}/>
                    <h6><i className="fa fa-check"></i> GangTeam</h6>
                    <div className="main-button">
                      <Link to="#">Follow</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="live-stream">
            <div className="col-lg-12">
              <div className="heading-section">
                <h4><em>Most Popular</em> Live Stream</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/stream-05.jpg" alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <Link to="#">Live</Link>
                        </div>
                        <ul>
                          <li><Link to="#"><i className="fa fa-eye"></i> 1.2K</Link></li>
                          <li><Link to="#"><i className="fa fa-gamepad"></i> CS-GO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src="assets/images/avatar-01.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                    </div>
                    <span><i className="fa fa-check"></i> Kengan Omeg</span>
                    <h4>Just Talking With Fans</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/stream-06.jpg" alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <Link to="#">Live</Link>
                        </div>
                        <ul>
                          <li><Link to="#"><i className="fa fa-eye"></i> 1.2K</Link></li>
                          <li><Link to="#"><i className="fa fa-gamepad"></i> CS-GO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src="assets/images/avatar-02.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                    </div>
                    <span><i className="fa fa-check"></i> LahutaMalc</span>
                    <h4>CS-GO 36 Hours Live Stream</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/stream-07.jpg" alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <Link to="#">Live</Link>
                        </div>
                        <ul>
                          <li><Link to="#"><i className="fa fa-eye"></i> 1.2K</Link></li>
                          <li><Link to="#"><i className="fa fa-gamepad"></i> CS-GO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src="assets/images/avatar-03.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                    </div>
                    <span><i className="fa fa-check"></i> Areluwa</span>
                    <h4>Maybe Nathej Allnight Chillin&apos;</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/stream-08.jpg" alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <Link to="#">Live</Link>
                        </div>
                        <ul>
                          <li><Link to="#"><i className="fa fa-eye"></i> 1.2K</Link></li>
                          <li><Link to="#"><i className="fa fa-gamepad"></i> CS-GO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src="assets/images/avatar-04.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                    </div>
                    <span><i className="fa fa-check"></i> NewGangTeam</span>
                    <h4>Live Streaming Till Morning</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/stream-07.jpg" alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <Link to="#">Live</Link>
                        </div>
                        <ul>
                          <li><Link to="#"><i className="fa fa-eye"></i> 1.2K</Link></li>
                          <li><Link to="#"><i className="fa fa-gamepad"></i> CS-GO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src="assets/images/avatar-01.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                    </div>
                    <span><i className="fa fa-check"></i> Kengan Omeg</span>
                    <h4>Just Talking With Fans</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/stream-08.jpg" alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <Link to="#">Live</Link>
                        </div>
                        <ul>
                          <li><Link to="#"><i className="fa fa-eye"></i> 1.2K</Link></li>
                          <li><Link to="#"><i className="fa fa-gamepad"></i> CS-GO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src="assets/images/avatar-02.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                    </div>
                    <span><i className="fa fa-check"></i> LahutaMalc</span>
                    <h4>CS-GO 36 Hours Live Stream</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/stream-05.jpg" alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <Link to="#">Live</Link>
                        </div>
                        <ul>
                          <li><Link to="#"><i className="fa fa-eye"></i> 1.2K</Link></li>
                          <li><Link to="#"><i className="fa fa-gamepad"></i> CS-GO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src="assets/images/avatar-03.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                    </div>
                    <span><i className="fa fa-check"></i> Areluwa</span>
                    <h4>Maybe Nathej Allnight Chillin&apos;</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="assets/images/stream-06.jpg" alt=""/>
                    <div className="hover-effect">
                      <div className="content">
                        <div className="live">
                          <Link to="#">Live</Link>
                        </div>
                        <ul>
                          <li><Link to="#"><i className="fa fa-eye"></i> 1.2K</Link></li>
                          <li><Link to="#"><i className="fa fa-gamepad"></i> CS-GO</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="down-content">
                    <div className="avatar">
                      <img src="assets/images/avatar-04.jpg" alt="" style={{maxWidth: "46px", borderRadius: "50%", float: "left"}}/>
                    </div>
                    <span><i className="fa fa-check"></i> NewGangTeam</span>
                    <h4>Live Streaming Till Morning</h4>
                  </div> 
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="streams.html">Load More Streams</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Streams