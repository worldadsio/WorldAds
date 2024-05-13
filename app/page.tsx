"use client"
import Image from "next/image";
import Header from "./component/Header";
import Main from "./component/Main";
import NavContent from "./component/NavContent";
import Advertise from "./component/advertise";
import Footer from "./component/footer";
import NodeOperator from "./component/nodeOperator";
import RideEarn from "./component/rideEarn";
import { useState, useEffect } from 'react';
import Preloader from "./Preloader";



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false); // Set loading to false when data is fetched
    }, 2000);
  }, []);

  return (
    <>
      <div>
       
       {loading?(<Preloader />):(  <>
            <Header />
            <Main />
            <NodeOperator />
            <RideEarn />
            <Advertise />
            <Footer />
          </>)}
       
         
        
      </div>
    </>
  );
}
