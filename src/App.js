import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
const percentage = 66;

class App extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                        POMODORO APP
                        </div>
                    </div>
                </nav>            
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <CircularProgressbar
                            percentage={percentage}
                            text={"00:00"}       
                            /> 
                        </div>
                        <div className="col-sm-12">
                            <div className="btn-toolbar" style={{display: 'flex',justifyContent: 'center'}} role="toolbar" aria-label="...">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default btn-lg">
                                        <span className="glyphicon glyphicon-play" aria-hidden="true"></span> Star
                                    </button>    
                                    <button type="button" className="btn btn-default btn-lg">
                                        <span className="glyphicon glyphicon-pause" aria-hidden="true"></span> Pause
                                    </button>       
                                    <button type="button" className="btn btn-default btn-lg">
                                        <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span> Refresh
                                    </button>                                       
                                </div>                           
                            </div>               
                        </div>                        
                    </div>     
                </div>                
            </div>
        );
    }
}

export default App;