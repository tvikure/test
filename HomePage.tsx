import * as React from "react";
import styles from "./Styles.module.scss";
import { data } from "./model";

class HomePage extends React.Component {

  
  getMainHeader = () => {
    return (
      <div className={styles.header}>
        <div
          className={styles.loginbutton}
          onClick={() => console.log("Login to EDP admin console")}
        >
          Login to EDP Admin Console
        </div>
      </div>
    )
  }

  getEDPDataHeader = () => {
    return (
      <>
      <div className={styles.EdpHeader}>
        <p className={styles.EdpText}> EDP Data Refresh </p>
        <div>
          <select
            className={styles.SelectTimeRange}
            value={"select"}
            onChange={() => {
              console.log("Select on change")
            }}
          >
            <option value="Last24Hour"> Last 24 Hours</option>
            <option value="Next24Hours"> Next 24 Hours</option>
            <option value="CustomDateRange"> Custom date range</option>
          </select>
        </div>
      </div>
      <p className={styles.Date}> Today, {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })} </p>
      </>
    )
  }

  getSearchBar = () => {
  return (
    <div>
      <input className={styles.Search}
        type="text"
        placeholder="Search Dataset"
        onChange={() => {
          console.log("Search input change")
        }}
      ></input> 
    </div>
  )
  }
 
  getTableView = () => {
    return (
      <>      
        <div className={styles.HeaderRow}>
           <div className={styles.DataSetName}>
              <p>Dataset Name</p>
           </div>
           <div className={styles.Type}>
              <p>| Type</p>
           </div>
           <div className={styles.RefreshFrequencySchedule}>
              <p>| Refresh Frequency Schedule</p>
           </div>
           <div className={styles.LastRefreshStatus}>
              <p>| Last Refresh Status</p>
           </div>
           <div className={styles.SlaComplaince}>
              <p>| SLA Complaince </p>
           </div>
        </div>
      </>
    )
  }

  getSLAComplainceColor = (status: string) : string => { 
    switch(status) {
      case "low":
        return "#fc3636"
      case "medium": 
        return "#ff6300"
      case "high": 
        return "#4ba247"
    }
    return "blue"
  }

  getDatasetsList = () => { 
   return (
     <>
          {data.map((data) => {
            return (
          <> 
       <div className={styles.TableRow}>
           <div className={styles.DataSetName}>
              <p>{data.dataset}</p>
           </div>
           <div className={styles.Type}>
              <p>{data.type}</p>
           </div>
           <div className={styles.RefreshFrequencySchedule}>
              <p> {data.refreshFrequencySchedule} </p>
           </div>
           <div className={styles.LastRefreshStatus}>
              <p>{data.lastRefreshStatus}</p>
           </div>
           <div className={styles.SlaComplaince}>
            <span className={styles.SlaContent}  style={{"--bgcolor": this.getSLAComplainceColor(data.slaCompliance.accuracy)} as React.CSSProperties}> A </span>
            <span className={styles.SlaContent}  style={{"--bgcolor": this.getSLAComplainceColor(data.slaCompliance.completeness)} as React.CSSProperties}> Cm </span>
            <span className={styles.SlaContent}  style={{"--bgcolor": this.getSLAComplainceColor(data.slaCompliance.consistency)} as React.CSSProperties}> Cn </span>
            <span className={styles.SlaContent}  style={{"--bgcolor": this.getSLAComplainceColor(data.slaCompliance.timeliness)} as React.CSSProperties}> T </span>
           </div>
       </div>
          </>
            );
          } 
          )}
     </>
   )
  }

  render() {
    return (
      <>
        {this.getMainHeader()}
        <div className={styles.EdpContent}>
          {this.getEDPDataHeader()}
          {this.getSearchBar()}
          {this.getTableView()}
          {this.getDatasetsList()}
          <p className={styles.Glossary}> 
          <ul> 
            <li> <b>Accuracy</b></li> 
            <li> <b> Completeness </b> </li> 
            <li><b> Correctness </b></li> 
            <li> <b> Timeliness </b> </li> 
          </ul>
          </p>
        </div>
      </>
    )
  }
}

export default HomePage;
