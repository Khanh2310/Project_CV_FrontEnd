import { CompanyCard } from '@/components/client/card';
import { Col, Row } from 'antd';
import styles from 'styles/client.module.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ClientCompanyPage = (props: any) => {
  return (
    <div className={styles['container']} style={{ marginTop: 20 }}>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <CompanyCard showPagination={true} />
        </Col>
      </Row>
    </div>
  );
};
