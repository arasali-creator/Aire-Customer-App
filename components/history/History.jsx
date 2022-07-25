import globalStyles from "../shared/Shared.module.scss";
import HistoryImage from "../../assets/images/history/photo_profile.png";
import styles from "./History.module.scss";
import Tabs from "react-tabs/lib/components/Tabs";
import TabList from "react-tabs/lib/components/TabList";
import Tab from "react-tabs/lib/components/Tab";
import TabPanel from "react-tabs/lib/components/TabPanel";
import Image from "next/image";
function History() {
  return (
    <section
      style={{ backgroundColor: "#F4F3F8" }}
      className={`${globalStyles.fullHeight}  ${globalStyles.pt_40} ${globalStyles.pt_sm_20} ${globalStyles.pb_sm_20} ${globalStyles.pb_35}`}
    >
      <div
        className={`${globalStyles.container} ${globalStyles.fullHeight} ${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.flexJustifyBetween}`}
      >
        <div
          className={styles.container}
          style={{
            boxShadow: "0px 0px 18px #00000014",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          <Tabs className={styles.tabs}>
            <TabList>
              <Tab>Scheduled</Tab>
              <Tab>In Progress</Tab>
              <Tab>History</Tab>
            </TabList>
            <TabPanel>
              <div
                className={`${globalStyles.flex} ${globalStyles.fullWidth} ${globalStyles.flexColumn} ${styles.history} ${globalStyles.mb_20} `}
              >
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm}  ${styles.historytop} `}
                >
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.mb_sm_20} `}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "55px",
                      }}
                      className={`${globalStyles.mr_10}`}
                    >
                      <Image
                        alt="history user"
                        src={HistoryImage}
                        layout="responsive"
                      />
                    </div>
                    <div className={`${styles.content}`}>
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                      >
                        John Doe
                      </h5>
                      <h6
                        className={`${globalStyles.smalt} ${globalStyles.fontSize_12} ${globalStyles.fontSemiBold}  `}
                      >
                        Scheduled
                      </h6>
                    </div>
                  </div>
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_sm} ${globalStyles.flexColumn} `}
                  >
                    <div className={styles.tag}>
                      <h5>Maintanence</h5>
                    </div>
                    <h5 className={styles.service}>Service No #xyon-04</h5>
                  </div>
                </div>
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm} ${styles.historybottom} ${globalStyles.fullWidth} `}
                >
                  <div
                    style={{ margin: 0 }}
                    className={`${globalStyles.row} ${globalStyles.fullWidth}  ${globalStyles.flexAlignCenter} `}
                  >
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}   `}
                      >
                        Items
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        2 Compressor
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}  `}
                      >
                        Payment
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        $8586
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33} ${globalStyles.flex} ${globalStyles.flexColumn} ${globalStyles.flexAlignEnd}`}
                    >
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium} ${globalStyles.mb_5}  `}
                      >
                        12:00 pm
                      </h5>
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium}   `}
                      >
                        04-27-2022
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            
              <div
                className={`${globalStyles.flex} ${globalStyles.fullWidth} ${globalStyles.flexColumn} ${styles.history} ${globalStyles.mb_20} `}
              >
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm}  ${styles.historytop} `}
                >
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.mb_sm_20} `}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "55px",
                      }}
                      className={`${globalStyles.mr_10}`}
                    >
                      <Image
                        alt="history user"
                        src={HistoryImage}
                        layout="responsive"
                      />
                    </div>
                    <div className={`${styles.content}`}>
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                      >
                        John Doe
                      </h5>
                      <h6
                        className={`${globalStyles.smalt} ${globalStyles.fontSize_12} ${globalStyles.fontSemiBold}  `}
                      >
                        Scheduled
                      </h6>
                    </div>
                  </div>
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_sm} ${globalStyles.flexColumn} `}
                  >
                    <div className={styles.tag}>
                      <h5>Maintanence</h5>
                    </div>
                    <h5 className={styles.service}>Service No #xyon-04</h5>
                  </div>
                </div>
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm} ${styles.historybottom} ${globalStyles.fullWidth} `}
                >
                  <div
                    style={{ margin: 0 }}
                    className={`${globalStyles.row} ${globalStyles.fullWidth}  ${globalStyles.flexAlignCenter} `}
                  >
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}   `}
                      >
                        Items
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        2 Compressor
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}  `}
                      >
                        Payment
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        $8586
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33} ${globalStyles.flex} ${globalStyles.flexColumn} ${globalStyles.flexAlignEnd}`}
                    >
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium} ${globalStyles.mb_5}  `}
                      >
                        12:00 pm
                      </h5>
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium}   `}
                      >
                        04-27-2022
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            
            </TabPanel>
          
            <TabPanel>
              <div
                className={`${globalStyles.flex} ${globalStyles.fullWidth} ${globalStyles.flexColumn} ${styles.history} ${globalStyles.mb_20} `}
              >
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm}  ${styles.historytop} `}
                >
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.mb_sm_20} `}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "55px",
                      }}
                      className={`${globalStyles.mr_10}`}
                    >
                      <Image
                        alt="history user"
                        src={HistoryImage}
                        layout="responsive"
                      />
                    </div>
                    <div className={`${styles.content}`}>
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                      >
                        John Doe
                      </h5>
                      <h6
                        className={`${globalStyles.smalt} ${globalStyles.fontSize_12} ${globalStyles.fontSemiBold}  `}
                      >
                        Scheduled
                      </h6>
                    </div>
                  </div>
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_sm} ${globalStyles.flexColumn} `}
                  >
                    <div className={styles.tag}>
                      <h5>Maintanence</h5>
                    </div>
                    <h5 className={styles.service}>Service No #xyon-04</h5>
                  </div>
                </div>
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm} ${styles.historybottom} ${globalStyles.fullWidth} `}
                >
                  <div
                    style={{ margin: 0 }}
                    className={`${globalStyles.row} ${globalStyles.fullWidth}  ${globalStyles.flexAlignCenter} `}
                  >
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}   `}
                      >
                        Items
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        2 Compressor
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}  `}
                      >
                        Payment
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        $8586
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33} ${globalStyles.flex} ${globalStyles.flexColumn} ${globalStyles.flexAlignEnd}`}
                    >
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium} ${globalStyles.mb_5}  `}
                      >
                        12:00 pm
                      </h5>
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium}   `}
                      >
                        04-27-2022
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            
              <div
                className={`${globalStyles.flex} ${globalStyles.fullWidth} ${globalStyles.flexColumn} ${styles.history} ${globalStyles.mb_20} `}
              >
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm}  ${styles.historytop} `}
                >
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.mb_sm_20} `}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "55px",
                      }}
                      className={`${globalStyles.mr_10}`}
                    >
                      <Image
                        alt="history user"
                        src={HistoryImage}
                        layout="responsive"
                      />
                    </div>
                    <div className={`${styles.content}`}>
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                      >
                        John Doe
                      </h5>
                      <h6
                        className={`${globalStyles.smalt} ${globalStyles.fontSize_12} ${globalStyles.fontSemiBold}  `}
                      >
                        Scheduled
                      </h6>
                    </div>
                  </div>
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_sm} ${globalStyles.flexColumn} `}
                  >
                    <div className={styles.tag}>
                      <h5>Maintanence</h5>
                    </div>
                    <h5 className={styles.service}>Service No #xyon-04</h5>
                  </div>
                </div>
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm} ${styles.historybottom} ${globalStyles.fullWidth} `}
                >
                  <div
                    style={{ margin: 0 }}
                    className={`${globalStyles.row} ${globalStyles.fullWidth}  ${globalStyles.flexAlignCenter} `}
                  >
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}   `}
                      >
                        Items
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        2 Compressor
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}  `}
                      >
                        Payment
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        $8586
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33} ${globalStyles.flex} ${globalStyles.flexColumn} ${globalStyles.flexAlignEnd}`}
                    >
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium} ${globalStyles.mb_5}  `}
                      >
                        12:00 pm
                      </h5>
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium}   `}
                      >
                        04-27-2022
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            
            </TabPanel>
          
            <TabPanel>
              <div
                className={`${globalStyles.flex} ${globalStyles.fullWidth} ${globalStyles.flexColumn} ${styles.history} ${globalStyles.mb_20} `}
              >
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm}  ${styles.historytop} `}
                >
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.mb_sm_20} `}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "55px",
                      }}
                      className={`${globalStyles.mr_10}`}
                    >
                      <Image
                        alt="history user"
                        src={HistoryImage}
                        layout="responsive"
                      />
                    </div>
                    <div className={`${styles.content}`}>
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                      >
                        John Doe
                      </h5>
                      <h6
                        className={`${globalStyles.smalt} ${globalStyles.fontSize_12} ${globalStyles.fontSemiBold}  `}
                      >
                        Scheduled
                      </h6>
                    </div>
                  </div>
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_sm} ${globalStyles.flexColumn} `}
                  >
                    <div className={styles.tag}>
                      <h5>Maintanence</h5>
                    </div>
                    <h5 className={styles.service}>Service No #xyon-04</h5>
                  </div>
                </div>
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm} ${styles.historybottom} ${globalStyles.fullWidth} `}
                >
                  <div
                    style={{ margin: 0 }}
                    className={`${globalStyles.row} ${globalStyles.fullWidth}  ${globalStyles.flexAlignCenter} `}
                  >
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}   `}
                      >
                        Items
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        2 Compressor
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}  `}
                      >
                        Payment
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        $8586
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33} ${globalStyles.flex} ${globalStyles.flexColumn} ${globalStyles.flexAlignEnd}`}
                    >
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium} ${globalStyles.mb_5}  `}
                      >
                        12:00 pm
                      </h5>
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium}   `}
                      >
                        04-27-2022
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            
              <div
                className={`${globalStyles.flex} ${globalStyles.fullWidth} ${globalStyles.flexColumn} ${styles.history} ${globalStyles.mb_20} `}
              >
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm}  ${styles.historytop} `}
                >
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.mb_sm_20} `}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "55px",
                      }}
                      className={`${globalStyles.mr_10}`}
                    >
                      <Image
                        alt="history user"
                        src={HistoryImage}
                        layout="responsive"
                      />
                    </div>
                    <div className={`${styles.content}`}>
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                      >
                        John Doe
                      </h5>
                      <h6
                        className={`${globalStyles.smalt} ${globalStyles.fontSize_12} ${globalStyles.fontSemiBold}  `}
                      >
                        Scheduled
                      </h6>
                    </div>
                  </div>
                  <div
                    className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_sm} ${globalStyles.flexColumn} `}
                  >
                    <div className={styles.tag}>
                      <h5>Maintanence</h5>
                    </div>
                    <h5 className={styles.service}>Service No #xyon-04</h5>
                  </div>
                </div>
                <div
                  className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm} ${styles.historybottom} ${globalStyles.fullWidth} `}
                >
                  <div
                    style={{ margin: 0 }}
                    className={`${globalStyles.row} ${globalStyles.fullWidth}  ${globalStyles.flexAlignCenter} `}
                  >
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}   `}
                      >
                        Items
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        2 Compressor
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33}`}
                    >
                      <h5
                        className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}  `}
                      >
                        Payment
                      </h5>
                      <h6
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                      >
                        $8586
                      </h6>
                    </div>
                    <div
                      style={{ padding: 0 }}
                      className={`${globalStyles.column_33} ${globalStyles.flex} ${globalStyles.flexColumn} ${globalStyles.flexAlignEnd}`}
                    >
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium} ${globalStyles.mb_5}  `}
                      >
                        12:00 pm
                      </h5>
                      <h5
                        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium}   `}
                      >
                        04-27-2022
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            
            </TabPanel>
          
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default History;
