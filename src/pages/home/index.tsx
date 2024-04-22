import { Divider } from 'antd';
import styles from 'styles/client.module.scss';
import SearchClient from '@/components/client/search.client';
import JobCard from '@/components/client/card/job.card';
import CompanyCard from '@/components/client/card/company.card';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
dayjs.locale('en');

const HomePage = () => {
  return (
    <>
      <div
        className={`search-content  md:px-16 md:py-16 ${styles['bgColor']} `}
      >
        <div className={`${styles['container']}`}>
          <SearchClient />
        </div>
      </div>
      <div className={`${styles['container']} ${styles['home-section']}`}>
        <Divider />
        <CompanyCard />
        <div style={{ margin: 50 }}></div>
        <Divider />
        <JobCard />
      </div>
    </>
  );
};

export default HomePage;
