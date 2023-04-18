import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function TabUi() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <div>asd</div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <div>asd</div>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <div>asd</div>
      </Tab>
    </Tabs>
  );
}

export default TabUi;
