import { useEffect, useState } from "react";
import { getSettings } from "../../services/appsettings";
import { AppSettings } from "../../models/settings";
import { IconEdit } from "@tabler/icons-react";
import FormSetting from "./form";
import * as stylex from "@stylexjs/stylex";
import { Button, Table } from "@mantine/core";

const styles = stylex.create ({
  test: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "10px",
  },
  column:{
    display: "flex-column",
    flexDirection: "column",
    paddingBottom: "10px",
  },
  table:{
    borderCollapse: 'collapse',
    borderRadius: '5%',
  },
  td: {
    border: '1px solid black',
    padding: '5px',
  },
  tdcenter:{
    border: '1px solid black',
    padding: '5px',
    textAlign: 'center',
  },
  tdbutton:{
    paddingLeft: "10px", 
    border: "none" 
  },
  form:{
    justifySelf: "center",
    alignSelf: "center"
  }
});

export default function AppSettingPage() {
  const [settings, setSettings] = useState<AppSettings[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState<AppSettings>();

  const handleSubmit = async () => {
    setEdit(undefined);
    setShowForm(false);
    const data = await getSettings();
    if (data) setSettings(data);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getSettings();
      if (data) setSettings(data);
    }
    fetchData();
  }, []);

  // TODO: show data in table using antd
  return (
    <div
      {...stylex.props(styles.test)}
    >
      <div>
        <h1>Appsetting Page</h1>
        <div>
          <div
            {...stylex.props(styles.column)}
          >
            <Table {...stylex.props(styles.table)}>
              <thead>
                <tr>
                  <th {...stylex.props(styles.td)}>No.</th>
                  <th {...stylex.props(styles.td)}>Name</th>
                  <th {...stylex.props(styles.td)}>Value</th>
                  <th {...stylex.props(styles.td)}>Description</th>
                  <th {...stylex.props(styles.td)}>Type</th>
                </tr>
              </thead>
              {settings.map((setting, index) => (
                <tbody key={index}>
                  <tr>
                    <td {...stylex.props(styles.tdcenter)}>{index}</td>
                    <td {...stylex.props(styles.td)}>{setting.referenceKey}</td>
                    <td {...stylex.props(styles.td)}>{setting.value}</td>
                    <td {...stylex.props(styles.td)}>{setting.description}</td>
                    <td {...stylex.props(styles.td)}>{setting.type}</td>
                    <td {...stylex.props(styles.tdbutton)}>
                      <Button
                        onClick={() => {
                          setEdit(setting);
                          setShowForm(true);
                        }}
                      >
                        <IconEdit />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
          <div>
            <Button variant="gradient" onClick={() => setShowForm(true)}>
              Add Setting
            </Button>
          </div>
        </div>
      </div>
      {showForm && (
        <FormSetting
          settings={edit}
          handleSubmit={handleSubmit}
          {...stylex.props(styles.form)}
        />
      )}
    </div>
  );
}
