import { ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/lib/config-provider';

interface IAntConfigProvider {
  theme: ThemeConfig;
  children: React.ReactNode;
}

export const AntConfigProvider = ({ theme, children }: IAntConfigProvider) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
