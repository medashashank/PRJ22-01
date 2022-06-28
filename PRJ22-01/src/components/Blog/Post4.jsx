import React from 'react'
import Post4img1 from '../Img/Post4img1.jpg'

function Post4() {
  return (
    <div>
         <div className="container" style={{padding:'50px',color:'3A3A3A', fontFamily:'sans-serif' ,textAlign:'center',}}>
    <h1 class="font-size">Should one run after "RETURNS" or Save <br/> more.. What's important?</h1>
        </div>
        
        <div className="container" style={{color:'#A9ADB1',padding:'10px'}}><i class="bi bi-watch"></i>  July 29,2021 <i class="bi bi-chat"></i> 0 <i class="bi bi-person">By Bindhu Bhat</i></div>
        <div className="container"  style={{padding:'25px',color:'#717477',marginLeft:'14%'}}>
        <p> Let's begin with a story from Morgan Housel's book, "The Psychology of Money" --</p>
        </div>
        <div className="container" style={{marginLeft:'15%'}}>
      <img src={Post4img1} class="image_resize" alt="..."/>
      </div>
      <div className="container" style={{padding:'30px',color:'#717477',marginLeft:'14%'}}>
        <p>Ronald James Read was an American philanthropist, investor, who died at age 92 leaving<br/>
         behind a fortune of $8 million&nbsp; For the major part of his life, he worked as a janitor and<br/>
         gas station attendant in his city. So how did he achieve this fortune despite being in such<br/>
         a job?</p>
         <p ><strong style={{color:'#3A3A3A'}}>Did he run after returns or did he patiently wait for his investments to grow?</strong></p>
         <p>The essential principle that he followed is interesting and is worth studying. It is all about<br/>
         the mindset that an investor has towards wealth creation. Simply put, there are 2 kinds<br/>
         of mindsets one can adopt – The hunter or Farmer mindset.</p>
         <p><strong style={{color:'#3A3A3A'}}>What's a Farmer's mindset in investing? </strong>A farmer does a study of the soil, weather, and <br/>
         demand-supply and decides what to grow. He is willing to give the crop its due cycle<br/>
         time to grow before harvesting, while continuously monitoring its progress. Similarly, an<br/>
         Investor with a farmer mindset will study the potential options for investment, the risk-<br/>
         return, and invest accordingly keeping a long-term perspective of over 7+ years for <br/>
         investments to compound. This may sound boring, but it generates life-long rewards.</p>
         <p><strong style={{color:'#3A3A3A'}}>In contrast, a Hunter mindset in investing </strong>is always looking for new hunting<br/>
         grounds/newer pastures and new varieties of products, constantly in the hope of a<br/>
         bonanza. This may mean continuously churning the investment portfolio, bearing higher<br/>
         costs, and the risk of making wrong decisions. In this mindset, the excitement of <br/>
         constant change is the mantra, giving a feeling of being dynamic and in vouge with <br/>
         trends.</p>
         <p>To come back to the story of Ronal James Read, over a period of 30+ years, he saved<br/>
         and invested whatever little he could with the right selection in blue-chip companies and<br/>
         patiently allowed his investments to grow. This was a combination of Farmer and<br/>
         Hunter’s mindset in action. He left behind a donation of $6M to the local hospital and<br/>
         school as a lasting legacy and giving back to the community.</p>
      </div>

      <div className="container" >
        <h5>Takeaways:</h5>
        <div className="container"style={{color:'#717477'}}>
        <p >1. A combination of Save and quality-based returns works best for an investor.</p>
        <p >2. Patience, discipline, and perseverance are essential for sustainable success.</p>
        </div>
        </div>
    </div>
  )
}

export default Post4