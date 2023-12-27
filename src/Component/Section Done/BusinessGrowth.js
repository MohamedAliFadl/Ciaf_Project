import { Fragment } from 'react'
import BGItems from '../Container/BGItems'

const BusinessGrowth = () => {
  return (
    <Fragment>
    <div className="fun-facts">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-content">
              {/* <span>Lorem ipsum dolor sit amet</span> */}
              <h2>Our Analisys for <br/> <em>business growth</em> <br/> in Ciaf Holding </h2>
              {/* <p>Pellentesque ultrices at turpis in vestibulum. Aenean pretium elit nec congue elementum. Nulla luctus laoreet porta. Maecenas at nisi tempus, porta metus vitae, faucibus augue. 
              <br/><br/>Fusce et venenatis ex. Quisque varius, velit quis dictum sagittis, odio velit molestie nunc, ut posuere ante tortor ut neque.</p>
              <a href="/" className="filled-button">Read More</a> */}
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="row">
            <BGItems count="4" title="Invesment Companys" />
              <BGItems count="17" title="Employee" />
              <BGItems count="500" title="Milion paid-in Capital " />
              <BGItems count="2" title="Invesment Fund" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default BusinessGrowth
