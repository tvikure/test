import * as React from "react";
import styles from "./Styles.module.scss";
import Select from 'react-select';

class HomePage extends React.Component {
  getMainHeader = () => {
    return (
      <div id={styles.header}>
        <div
          id={styles.loginbutton}
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
      <div id={styles.EdpHeader}>
        <p id={styles.EdpText}> EDP Data Refresh </p>
        <div>
          <select
            id={styles.SelectTimeRange}
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
      <p id={styles.Date}> Today, {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })} </p>
      </>
    )
  }

  getSearchBar = () => {
  return (
    <div>
      <input id={styles.Search}
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
        <div id={styles.HeaderRow}>
           <div id={styles.DataSetName}>
              <p>Dataset Name</p>
           </div>
           <div id={styles.Type}>
              <p>| Type</p>
           </div>
           <div id={styles.RefreshFrequencySchedule}>
              <p>| Refresh Frequency Schedule</p>
           </div>
           <div id={styles.LastRefreshStatus}>
              <p>| Last Refresh Status</p>
           </div>
           <div id={styles.SlaComplaince}>
              <p>| SLA Complaince </p>
           </div>
        </div>
      </>
    )

  }


  render() {
    return (
      <>
        {this.getMainHeader()}
        <div id={styles.EdpContent}>
          {this.getEDPDataHeader()}
          {this.getSearchBar()}
          {this.getTableView()}
        </div>
      </>
    )
  }
}

export default HomePage;
