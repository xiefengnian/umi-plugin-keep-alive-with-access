import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { KeepAlive, useAccess, useModel } from '@umijs/max';
import styles from './index.less';

const Home = () => {
  const { name } = useModel('global'); // Cannot read properties of null (reading 'dispatcher')
  const access = useAccess(); // null

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        {JSON.stringify(access)}
      </div>
    </PageContainer>
  );
};

const HomePage: React.FC = () => {
  return (
    <KeepAlive>
      <Home />
    </KeepAlive>
  );
};

export default HomePage;
