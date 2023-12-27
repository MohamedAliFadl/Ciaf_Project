import React, { Fragment } from 'react'

function BoardMemberItem(props) {
  return (
    <Fragment>
    <div class="col-xs-12 col-sm-6 col-md-4">
    <div class="image-flip">
      <div class="mainflip flip-0">
        <div class="frontside">
          <div class="card">
            <div class="card-body text-center">
              <p>
                <img
                  class=" img-fluid"
                  src={props.img}
                  alt="card-img"
                />
              </p>
              <h4 class="card-title">{props.name}</h4>
              <p class="card-text">{props.title}</p>
            </div>
          </div>
        </div>
        <div class="backside">
          <div class="card">
            <div class="card-body text-center mt-4">
              <h4 class="card-title">{props.backname}</h4>
              <p class="card-text">{props.backdesc}</p>
              {/*<ul class="list-inline">
                <li class="list-inline-item">
                  <a
                    class="social-icon text-xs-center"
                    href="https://www.fiverr.com/share/qb8D02">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="social-icon text-xs-center"
                    href="https://www.fiverr.com/share/qb8D02">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="social-icon text-xs-center"
                    href="https://www.fiverr.com/share/qb8D02">
                    <i class="fa fa-skype"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="social-icon text-xs-center"
                    href="https://www.fiverr.com/share/qb8D02">
                    <i class="fa fa-google"></i>
                  </a>
                </li>
  </ul>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </Fragment>
  )
}

export default BoardMemberItem
