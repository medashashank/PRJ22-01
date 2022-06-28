import React from 'react'
import Post6img1 from '../Img/Post6img1.jpg'

function Post5() {
  return (
    <div>
        <div className="container" style={{padding:'50px',color:'3A3A3A', fontFamily:'sans-serif' ,textAlign:'center',}}>
        <h1 class="font-size"> Should You Invest in Small Cap Funds?</h1>
        </div>
        <div className="container" style={{color:'#A9ADB1',padding:'10px'}}><i class="bi bi-watch"></i>  June 11,2021 <i class="bi bi-chat"></i> 0 <i class="bi bi-person"> By venkat dodla</i></div>
        <div className="container">
        <p style={{color:'#3A3A3A', fontFamily:'sans-serif',padding:'25px',marginLeft:'-2%'}}><strong>Introduction:</strong></p>
        <p style={{color:'#717477'}}>After the coronavirus impact, all markets across the globe have tumbled – even<br/>
        emerging markets like India were impacted negatively. However, it hasn’t taken much<br/>
        time to recover. Within less than a year, the markets have rallied and touched all-time<br/>
        highs. Now maximum people are confused where they should invest or which category <br/>
        to choose for investing. Yes, there are multiple answers for this particular question, but<br/>
        one of the worthier answers is the Small-cap space.</p>
        <p style={{color:'#717477'}}>While talking about the small-cap category, sustainable companies with stable<br/>
        competitive advantages, trading at attractive valuations will produce higher returns over<br/>
        a long-term investment horizon.</p>
        <p style={{color:'#3A3A3A', fontFamily:'sans-serif',padding:'25px',marginLeft:'-2%'}}><strong>Breakdown of small-cap:</strong></p>
        <p style={{color:'#717477'}}>After the pandemic, all the stocks rallied regardless of fundamentals; the current rally is<br/>
        a price rally because of the liquidity available in the market. Once the situation comes to<br/>
        normalcy, then again, these fundamentals will cause a bigger impact.</p>
        <p style={{color:'#717477'}}>In the small-cap index, there is some correlation between Price and Net profit for the <br/>
        past 10 years. But if we observe, there is strong correlation from 2013 onwards –<br/>
        particularly from 2016 to 2018, the rally was very high.</p>
        <p style={{color:'#717477'}}>At present, there is a huge gap between the PAT and Price. So, we could expect that the<br/>
        net profit and revenues will grow in the long-term and that volatility will be high in the<br/>
        short-term.</p>
        <p style={{color:'#717477'}}>While coming to the valuations point of view, small caps are trading at fair valuations in<br/>
        comparison to pre-covid market conditions. The average 3 years (2017-19) PE is 33<br/>
        and the current PE is 56. If we compare the current price to 2019 earnings, the PE is 22. All<br/>
        of us are thinking that the small-cap is overvalued because it’s touched the all-time high.<br/>
        But our comparison with respect to the average 3 years PE (33) and current PE (22) <br/>
       (price/2019earnings) shows we have a huge opportunity.</p>
       </div>
       <div className="container">
       <img src={Post6img1} class="image_resize" alt="..."/>
       </div>
       <div className="container">
       <p style={{color:'#3A3A3A', fontFamily:'sans-serif',padding:'25px',marginLeft:'-2%'}}><strong>Data source: ACE equity</strong></p>
       <p style={{color:'#717477'}}>In the above chart, we can see the correlation between the Price and Net profit of the<br/>
       index. From 2014-2019, the net profit and the price, both were moving upwards<br/>
       simultaneously. From 2019-20, both the Net profit and Price went down. With this<br/>
       analysis we can conclude that there is some correlation.</p>
       <p style={{color:'#717477'}}>Some of the important points in small-cap space that are influential:</p>
       </div>
       <div className="container" style={{color:'#717477'}}>
       <li>Government has introduced some policies regarding manufacturing</li>
       <li>Due to the Covid impact, companies started saving costs like operational and other costs</li>
       <li>Improved cash flow positions</li>
       <li>Decreasing debt levels</li>
       <li>Improved operating profits </li>
      </div>
      <div className="container">
      <p style={{color:'#717477', padding:'40px',marginLeft:'-3%'}}> In conclusion, we have the opportunity in the small cap funds based on the past analysis<br/>
      and valuations - this is a great time to invest in small caps funds.</p>
      </div>
      </div>
    )
}

export default Post5
