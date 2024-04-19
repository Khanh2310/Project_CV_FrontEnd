import { Button, Col, Form, Row, Select } from 'antd';
import {
  EnvironmentOutlined,
  MonitorOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { LOCATION_LIST, SKILLS_LIST } from '@/config/utils';
import { ProForm } from '@ant-design/pro-components';
import { AntConfigProvider } from '../admin/config/ant/AntConfigProvider';

const SearchClient = () => {
  const optionsSkills = SKILLS_LIST;
  const optionsLocations = LOCATION_LIST;
  const [form] = Form.useForm();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFinish = async (values: any) => {};

  return (
    <ProForm
      form={form}
      onFinish={onFinish}
      submitter={{
        render: () => <></>,
      }}
    >
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <h2 className="text-white text-3xl font-bold mb-3">
            Việc Làm IT Cho Developer "Chất"
          </h2>
        </Col>
        <Col span={24} md={16}>
          <ProForm.Item name="skills">
            <AntConfigProvider
              theme={{
                components: {
                  Select: {
                    optionFontSize: 16,
                  },
                },
              }}
            >
              <Select
                size="large"
                // mode="multiple"
                allowClear
                showArrow={false}
                style={{ width: '100%', height: '56px' }}
                placeholder={
                  <span className="text-lg font-medium">
                    {/* <MonitorOutlined /> */}
                    Enter keyword skill (Java, iOS...), job title, company...
                  </span>
                }
                optionLabelProp="label"
                options={optionsSkills}
              />
            </AntConfigProvider>
          </ProForm.Item>
        </Col>
        <Col span={12} md={4}>
          <ProForm.Item name="location">
            <Select
              size="large"
              // mode="multiple"
              allowClear
              showArrow={false}
              style={{ width: '100%', height: '56px' }}
              placeholder={
                <span className="text-lg font-medium">
                  <EnvironmentOutlined /> Địa điểm...
                </span>
              }
              optionLabelProp="label"
              options={optionsLocations}
            />
          </ProForm.Item>
        </Col>
        <Col span={12} md={4}>
          {/* <div className="flex items-center justify-center text-white bg-[#ed1b2f] rounded-md">
            <SearchOutlined />
            <Button
              className="bg-[#ed1b2f] border-[#ed1b2f] outline-none hover:bg-[#ed1b2f]"
              onClick={() => form.submit()}
            >
              Search
            </Button>
          </div> */}
          <AntConfigProvider
            theme={{
              token: {
                colorPrimary: '#fff',
                colorBgContainer: '#ed1b2f',
                colorText: '#fff',
              },
              components: {
                Button: {
                  defaultHoverBg: '#c82222',
                  defaultBorderColor: '#ed1b2f',
                  defaultHoverBorderColor: '#c82222',
                },
              },
            }}
          >
            <Button
              className="font-bold text-lg"
              size="large"
              style={{ height: '56px', width: '100%' }}
              onClick={() => form.submit()}
              icon={<SearchOutlined />}
            >
              Search
            </Button>
          </AntConfigProvider>
        </Col>
      </Row>
    </ProForm>
  );
};
export default SearchClient;
