import { useEffect, useState } from "react";
import { getSettings } from "../../services/appsettings";
import { AppSettings } from "../../models/settings";

export default function AdminPage() {
  const [settings, setSettings] = useState<AppSettings[]>([]);

  // const getDate = (date: Date | string | undefined) => {
  //   if (!date) {
  //     return '';
  //   }
  //   if (date instanceof Date) {
  //     return date.toDateString();
  //   }
  //   return date;
  // }

  useEffect(() => {
    async function fetchData() {
      const data = await getSettings();
      if (data) setSettings(data);
    }

    fetchData();
  }, []);
  // TODO: show data in table using antd
  return (
    <div>
      <h1>Admin Page</h1>
      <h4>Settings</h4>
      {settings.map((setting, index) => (
        <div style={{ display: "flex"}} key={index}>
          <div>{index}</div>
          <div>
            <p>Id: {setting.id}</p>
            <p>Name: {setting.referenceKey}</p>
            <p>Value: {setting.value} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
