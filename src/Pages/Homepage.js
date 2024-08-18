import React from 'react'
import './Homepage.css';
 

 function Homepage() {
  return (
    <>
    <div className='titles'>
        <div className='dropdown'>
    <h5 className='dropdownFont'>Smart Devices</h5>
    <div className='dropdowncontent'>
     <a href='/'>SmartPhones</a>
     <a href='/'>Smart Watches</a>
     <a href='/'>Smart T.V</a>
    </div>
    </div>

    <div className='dropdown'>
    <h5 className='dropdownFont'>Health</h5>
    <div className='dropdowncontent'>
    <a href='/'>Medicine</a>
    <a href='/'>Food</a>
     <a href='/'>Environment</a>
     </div>
     </div>

    <div className='dropdown'>
    <h5 className='dropdownFont'>Finance</h5>
    <div className='dropdowncontent'>
    <a href='/'>Insurtech</a>
    <a href='/'>Banking</a>
    <a href='/'>Blockchain</a>
    <a href='/'>Banking</a>
    <a href='/'>Digital Payment</a>
    <a href='/'>Equity Financing</a>
     </div>
     </div>
     
     <div className='dropdown'>
    <h5 className='dropdownFont'>Markets</h5>
    <div className='dropdowncontent'>
    <a href='/'>Stock Markets</a>
     </div>
     </div>

     <div className='dropdown'>
    <h5 className='dropdownFont'>Automation</h5>
    <div className='dropdowncontent'>
    <a href='/'>Software</a>
    <a href='/'>Hardware</a>
     </div>
     </div>

     <div className='dropdown'>
    <h5 className='dropdownFont'>Cloud</h5>
    <div className='dropdowncontent'>
    <a href='/'>Private Cloud</a>
    <a href='/'>Public Cloud</a>
    <a href='/'>Hybrid Cloud</a>
    <a href='/'>Multi Cloud</a>
     </div>
     </div>

     <div className='dropdown'>
    <h5 className='dropdownFont'>CyberSecurity</h5>
    <div className='dropdowncontent'>
    <a href='/'>Network Security</a>
    <a href='/'>Cloud  Security</a>
    <a href='/'>Information Security</a>
    <a href='/'>Ethical Hacking</a>
    <a href='/'>Application Security</a>
    <a href='/'>Crtical Infastructure Security</a>
    </div>
     </div>
    
     <div className='dropdown'>
    <h5 className='dropdownFont'>Artificial Intelligence</h5>
    <div className='dropdowncontent'>
    <a href='/'>Deep Learning</a>
    <a href='/'>Robotics</a>
    <a href='/'>Computer Vision</a>
    <a href='/'>Super A.I</a>
    <a href='/'>General A.I</a>
    <a href='/'>Narrow A.I</a>
    </div>
     </div>

     <div className='dropdown'>
    <h5 className='dropdownFont'>SaaS</h5>
    <div className='dropdowncontent'>
    <a href='/'>Accounting</a>
    <a href='/'>CRM Software</a>
    <a href='/'>Billing Plalforms</a>
    <a href='/'>Project Management</a>
    <a href='/'>Retail Sales</a>
    <a href='/'>Marketing</a>
    </div>
     </div> 
    </div>

    

    <h1>Trending Now:</h1>
    <div className='trending'>
    <div className='sector'>
    <img className='trending-image' src="https://www.verdict.co.uk/wp-content/uploads/2022/09/shutterstock_1209422515-scaled.jpg" alt='drone'
      />
    <h4>The application of drone technology in agriculture</h4>
    </div>
    <div className='sector'>
    <img className='trending-image' src="https://wearethewriters.com/wp-content/uploads/2020/11/Unicorn-Startup-1536x944.png" alt='startups'
      />
      <h4>A growing number of tech unicorn startups in Africa</h4>
    </div>
    <div className='sector'>
    <img className='trending-image' src="https://cdn.britannica.com/46/206546-050-797ECAC4/Researcher-biological-samples-laboratory-purify-molecules-therapeutic-proteins.jpg"
     alt='biotechnology'  />
      <h4>The latest development in biotechnology</h4>
      </div>
      </div>
      <br/>

        <br/>
        <br/>
       <br />
       <br/>
      <h1>Top Stories:</h1>
   </>
  );
};



export default Homepage;

