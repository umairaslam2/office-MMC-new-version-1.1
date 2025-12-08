import { Button, Table, Input, Form } from "antd";

const ScreenForm = ({ title, columns, data }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(`${title} Form Values:`, values);
  };

  return (
    <div className="">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">{title}</h2>

      {/* Form with responsive grid */}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="grid grid-cols-1 gap-4"
      >
        {/* Screen Name, Heading, Title in 1 row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Form.Item
            name="screenName"
            label="Screen Name"
            rules={[{ required: true, message: "Please enter Screen Name!" }]}
          >
            <Input placeholder="Screen Name" />
          </Form.Item>

          <Form.Item
            name="heading"
            label="Heading"
            rules={[{ required: true, message: "Please enter Heading!" }]}
          >
            <Input placeholder="Main Heading" />
          </Form.Item>

          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter Title!" }]}
          >
            <Input placeholder="Title" />
          </Form.Item>
        </div>

        {/* Description full row */}
        <Form.Item
          name="description"
          label="Description"
          className="col-span-1 md:col-span-3"
          rules={[{ required: true, message: "Please enter Description!" }]}
        >
          <Input.TextArea placeholder="Description" rows={3} />
        </Form.Item>

        {/* Buttons */}
        <div className="col-span-1 md:col-span-3 flex flex-col sm:flex-row gap-3 justify-end">
          <Button danger size="middle" className="w-full sm:w-auto">
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            size="middle"
            className="w-full sm:w-auto"
            style={{ background: "green", borderColor: "green" }}
          >
            Submit
          </Button>
        </div>
      </Form>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <Table
          rowKey="id"
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default ScreenForm;