import React from 'react'
import {Link} from 'react-router-dom';
import Blog1 from '../Img/Blog1.jpg'
import Blog2 from '../Img/Blog2.jpg'
import Blog3 from '../Img/Blog3.jpg'
import Blog4 from '../Img/Blog4.jpg'
import Blog5 from '../Img/Blog5.jpg'
import Blog6 from '../Img/Blog6.jpg'
import Blog7 from '../Img/Blog7.jpg'
import Blog8 from '../Img/Blog8.jpg'
import Blog9 from '../Img/Blog9.jpg'


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
                     <img src={Blog1} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 style={{padding:'5px',color:'#8A8A8A'}}>CLIENTS EDUCATION</h6>
                        <div className="underline"></div>
                        <Link className="onClick" to="/why-investment-decision-based-on-large-cap-and-small-cap-is-flawed/" rel="bookmark"><h4>Why Investment Decision<br/> based on Large Cap, Mid Cap<br/> and Small Cap is flawed</h4></Link>
                        <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  March 22,2022 <i class="bi bi-chat"></i>  0</div>
                     </div>
                     </div>
                     </div>


                  <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                <img src={Blog2} className="w-100 border-bottom" alt="Blog"/>
                <div className="card-body">
                <h6 style={{padding:'5px',color:'#8A8A8A'}}>CLIENTS EDUCATION</h6>
                 <div className="underline"></div>
                 <Link className="onClick" to="/guardian-capital-what-to-expect-from-your-investments-going-forward/" rel="bookmark"><h4>Guardian Capital: What to expect <br/>from your investments – <br/>going forward?</h4></Link>
                 <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  March 22,2022 <i class="bi bi-chat"></i>  0</div>
                 </div>
                </div>
                </div>


                  <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                     <img src={Blog3} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 style={{padding:'5px',color:'#8A8A8A'}}>FINANCIAL CONSULTING</h6>
                        <div className="underline"></div>
                        <Link className="onClick" to="/5-questions-to-ask-your-wealth-manager/" rel="bookmark"><h4>5 Questions to Ask Your<br/> Wealth Manager</h4></Link>
                        <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  August 17,2021 <i class="bi bi-chat"></i>  0</div>
                        </div>
                     </div>
                     </div>


                     <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                
                     <div className="card-body">
                        <h6 style={{padding:'5px',color:'#8A8A8A'}}>SMART INVESTING</h6>
                        <div className="underline"></div>
                        <Link className="onClick" to="/should-one-run-after-returns-or-save-more-whats-important/" rel="bookmark"><h4>Should one run after<br/> ”RETURNS” or Save more.. <br/>What’s important?</h4></Link>
                        <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  July 29,2021 <i class="bi bi-chat"></i>  0</div>
                        <img src={Blog9} className="w-100 border-bottom" alt="Blog"/>
                        </div>
                     </div>
                     </div>

                     <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                     <img src={Blog4} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 style={{padding:'5px',color:'#8A8A8A'}}>GUARDIAN</h6>
                        <div className="underline"></div>
                        <Link className="onClick" to="/basic-insurances-for-every-individual/" rel="bookmark"><h4>Basic Insurances to be in place<br/> for every individual</h4></Link>
                        <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  July 6,2021 <i class="bi bi-chat"></i>  0</div>
                      </div>
                     </div>
                     </div>



                     <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                     <img src={Blog5} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 style={{padding:'5px',color:'#8A8A8A'}}>UNCATEGORIZED</h6>
                        <div className="underline"></div>
                        <Link className="onClick" to="/small-cap-funds/" rel="bookmark"><h4>Should You Invest in Small<br/> Cap Funds?</h4></Link>
                        <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  June 11,2021 <i class="bi bi-chat"></i>  0</div>
                    </div>
                     </div>
                     </div>



                     <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                     <img src={Blog6} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 style={{padding:'5px',color:'#8A8A8A'}}>GUARDIAN</h6>
                        <div className="underline"></div>
                        <Link className="onClick" to="/work-from-home-version-2-0-guess-whos-backback-again/" rel="bookmark"><h4>Work from Home, Version 2.0: Guess Who’s Back…Back<br/> Again…</h4></Link>
                        <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  May 3,2021 <i class="bi bi-chat"></i>  0</div>
                        </div>
                     </div>
                     </div>



                     <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                     <img src={Blog7} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 style={{padding:'5px',color:'#8A8A8A'}}>UNCATEGORIZED</h6>
                        <div className="underline"></div>
                        <Link className="onClick" to="/high-pe-valuations-how-does-it-affect-if-valuations-correct/" rel="bookmark"><h4>High PE – valuations? How<br/> does it affect if valuations<br/> correct?</h4></Link>
                        <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i>  March 1,2021 <i class="bi bi-chat"></i>  0</div>
                        </div>
                     </div>
                     </div>


                     <div className="col-md-4" style={{padding:'30px'}}>
                 <div>
                     <img src={Blog8} className="w-100 border-bottom" alt="Blog"/>
                     <div className="card-body">
                        <h6 style={{padding:'5px',color:'#8A8A8A'}}>UNCATEGORIZED</h6>
                        <div className="underline"></div>
                        <Link className="onClick" to="/union-budget-highlights-2021/" rel="bookmark"><h4>Union Budget Highlights –<br/> 2021</h4></Link>
                        <div style={{color:'#A9ADB1'}}><i class="bi bi-watch"></i> February 4,2021 <i class="bi bi-chat"></i>  0</div>
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
    <li class="page-item"><Link class="onClick"to="/blog/" >   </Link></li>
    <li class="page-item"><Link class="onClick"to="/blog/page/2/" >2</Link></li>
    <li class="page-item"><Link class="onClick"to="/blog/page/3/" >3</Link></li>
    <li class="page-item"><Link class="onClick"to="/blog/page/2/" ><i class="bi bi-arrow-right"></i></Link></li>
  </ul>
</nav>
</div>
{/* <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class=""><a class="" href="http://localhost:3000/blog">1</a></li>
    <li class=""><a class="" href="http://localhost:3000/blog/page/2/">2</a></li>
    <li class=""><a class="" href="http://localhost:3000/blog/page/3/">3</a></li>
  </ul>
</nav> */}



   </div>
  )
}
