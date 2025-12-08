import ScreenForm from "./ScreenForm"
import { Button } from "antd";

const Screens = () => {
  const columns = [
    { title: "Id", dataIndex: "id", key: "id" },
    { title: "Screen Name", dataIndex: "screenName", key: "screenName" },
    { title: "Heading", dataIndex: "heading", key: "heading" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex gap-2">
          <Button type="primary">Edit</Button>
          <Button danger>Delete</Button>
        </div>
      ),
    },
  ];

  const data = [
    { id: 21, screenName: "Screen6", heading: "Main Heading", title: "Title1", description: "Desc1" },
    { id: 1, screenName: "Screen1", heading: "Main Heading", title: "Title2", description: "Desc2" },
    { id: 2, screenName: "Screen2", heading: "Main Heading", title: "Title3", description: "Desc3" },
  ];

  return (
    <ScreenForm
      title="Screens"
      columns={columns}
      data={data}
    />
  );
};

export default Screens;
