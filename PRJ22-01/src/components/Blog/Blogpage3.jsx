import React from 'react'
import {Link} from 'react-router-dom';
import Blog19 from '../Img/Blog19.jpg'
import Blog20 from '../Img/Blog20.jpg'
import Blog21 from '../Img/Blog21.jpg'
import Blog22 from '../Img/Blog22.jpg'



export default function Blog() {
  return (
   <div>
     <h1 className="main-heading text-center">All Posts</h1>
     <section className="section">
    <div className="container">
        <div className="row">
            <div className="col-md-12 mb-4text-center">
                 
                 <div className="underline mx-auto"></div>
            </div>


             <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                     <img src={Blog19} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <p style={{padding:'5px',color:'#8A8A8A',fontFamily:'sans-serif'}}>EQUITY INVESTMENTS, FINANCIAL CONSULTING, GUARDIAN, RESEARCH, SMART INVESTING</p>
                        <div className="underline"></div>
                        <Link className="onClick" to="/this-is-a-good-time-to-invest/" rel="bookmark"><h4>This is A Good Time To Invest</h4></Link>
                        <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  August 20, 2019 <i class="bi bi-chat"></i>  0</div>
                     </div>
                     </div>
                     </div>


                  <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                <img src={Blog20} className="w-100 border-bottom" alt="Blog"/>
                <div className="card-body">
                <p style={{padding:'5px',color:'#8A8A8A',fontFamily:'sans-serif'}}>EQUITY INVESTMENTS, GUARDIAN, SMART INVESTING </p>
                 <div className="underline"></div>
                 <Link className="onClick" to="/tackling-traditional-investment-avenue-the-gold-and-real-estate-myths/" rel="bookmark"><h4>Tackling Traditional<br/>Investment Avenues: The Gold<br/>and Real Estate Myths</h4></Link>
                 <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  June 26, 2019 <i class="bi bi-chat"></i>  0</div>
                 </div>
                </div>
                </div>


                  <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                     <img src={Blog21} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <p style={{padding:'5px',color:'#8A8A8A',fontFamily:'sans-serif'}}>GUARDIAN</p>
                        <div className="underline"></div>
                        <Link className="onClick" to="/being-moneysmart/" rel="bookmark"><h4>Being MoneySmart</h4></Link>
                        <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  January 3, 2019 <i class="bi bi-chat"></i>  0</div>
                        </div>
                     </div>
                     </div>


                     <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                 <img src={Blog22} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <p style={{padding:'5px',color:'#8A8A8A', fontFamily:'sans-serif'}}>FINANCIAL CONSULTING</p>
                        <div className="underline"></div>
                        <Link className="onClick" to="/i-invest-all-my-earnings-savings-in-my-business-is-it-a-good-strategy/" rel="bookmark"><h4>Money Money Money - <br/> Identify Your financial<br/></h4></Link>
                        <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  December 15, 2020 <i class="bi bi-chat"></i>  0</div>
                        </div>
                     </div>
                     </div>

                    
                     
        </div>
    </div>
</section>

 {/* pagination - bootstrap */}
 <div style={{padding:'70px'}}>
 <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
  <li class="page-item"><Link class="onClick"to="/blog/page/2/" ><i class="bi bi-arrow-left"></i></Link></li>
    <li class="page-item"><Link class="onClick"to="/blog/" >1</Link></li>
    <li class="page-item"><Link class="onClick"to="/blog/page/2/" >2</Link></li>
    <li class="page-item"><Link class="onClick"to="/blog/page/3/" ><h6>  </h6></Link></li>
  </ul>
</nav> 
</div>


{/* <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class=""><a class="" href="http://localhost:3000/blog">1</a></li>
    <li class=""><a class="" href="http://localhost:3000/blog/page/2/">2</a></li>
    <li class=""><a class="" href="http://localhost:3000/blog/page/3/"><h6>3</h6></a></li>
  </ul>
</nav> */}


   </div>
  )
}

