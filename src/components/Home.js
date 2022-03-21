import React,{Component} from "react";
import Deneyimler from "./Deneyimler";
import Navbar from "./Navbar";
//import Portföyler from "./Portföyler";
import Yetenekler from "./Yetenekler";
class Home extends Component{
    render(){
        return (
            <section>
                <Navbar />
                    <div className="container">
                        <div className="row">
                            <div className='col s12 m4 l3'>
                               
                            </div>
                            <div className='col s12 m8 l9'>
                                <Yetenekler />
                                <Deneyimler />   
                                

                               </div>
                        </div> 
                    </div>
            </section>




        )

    }


}
export default Home;
