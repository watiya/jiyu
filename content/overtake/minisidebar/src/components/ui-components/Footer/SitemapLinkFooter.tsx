import CardBox from 'src/components/shared/CardBox';
import SitemapLinkfooter from './Code/SitemapLinkFooterCode';
import SitemapLinkfooterCode from './Code/SitemapLinkFooterCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const SitemapLinkFooter = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Sitemap links</h4>
          <SitemapLinkfooter />
        </div>
        <CodeDialog>{SitemapLinkfooterCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default SitemapLinkFooter;
