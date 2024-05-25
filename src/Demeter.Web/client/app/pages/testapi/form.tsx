import { CSSProperties, ChangeEvent, useState } from "react";
import { createSettings, updateSettings } from "../../services/appsettings";
import { AppSettings } from "../../models/settings";
import * as stylex from "@stylexjs/stylex";
import { Button } from "@mantine/core";

type FormSettingProps = {
  settings?: AppSettings;
  handleSubmit: () => Promise<void>;
  className?: string;
  style?: CSSProperties;
};

const styles = stylex.create({
  form1: {
    border: "1px solid black",
    padding: "0px 10px 10px 10px", 
    borderRadius: "10px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
  },
  h1:{
    marginTop: "0px",
  },
  form2: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    paddingBottom: "10px",
  },
  form3: {
    display: "flex", 
    justifyContent: "space-between"
  },

});

export default function FormSetting({
  settings,
  handleSubmit,
  className,
  style,
}: FormSettingProps) {
  const [formInput, setFormInput] = useState<AppSettings>(settings ?? {});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  return (
    <div className={className} style={style}>
      <div
        {...stylex.props(styles.form1)}
      >
        <h1 {...stylex.props(styles.h1)}>{settings ? "Edit" : "Add"} Setting</h1>
        <div
          {...stylex.props(styles.form2)}
        >
          <div {...stylex.props(styles.form3)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="referenceKey" onChange={handleChange} />
          </div>
          <div {...stylex.props(styles.form3)}>
            <label htmlFor="value">Value</label>
            <input type="text" name="value" onChange={handleChange} />
          </div>
          <div {...stylex.props(styles.form3)}>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" onChange={handleChange} />
          </div>
          <div {...stylex.props(styles.form3)}>
            <label htmlFor="type">Type</label>
            <input type="text" name="type" onChange={handleChange} />
          </div>
        </div>
        <Button
          variant="gradient"
          onClick={async () => {
            if (settings) await updateSettings([formInput]);
            else await createSettings(formInput);
            await handleSubmit();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
